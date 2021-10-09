import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from '../../libs/apiGateway';
import { S3, SQS } from "aws-sdk";
import * as csvParser from 'csv-parser';

const importFileParser = async ( event: { Records: any[]; } ) => {
  console.log( "Request: " + JSON.stringify( event ) );
  const s3 = new S3( { region: "eu-west-1" } );
  const sqs = new SQS();
  const uploadFolder = "uploaded";
  const parsedFolder = "parsed";
  let statusCode = 200;

  for ( const record of event.Records ) {
    const params = {
      Bucket: process.env.BUCKET,
      Key: `${record.s3.object.key}`
    };

    await s3.headObject( params ).promise().then( async () => {
      const s3Stream = await s3.getObject( params ).createReadStream();

      await s3Stream.pipe( csvParser( {
        mapValues: ( obj ) => {
          if ( obj.index == 2 || obj.index == 3 ) {
            return Number( obj.value );
          } else {
            return obj.value;
          }
        }
      } ) )
        .on( 'data', ( data: any ) => {
          console.log( "Queue URL: " + process.env.SQS_URL );

          sqs.sendMessage( {
            QueueUrl: process.env.SQS_URL,
            MessageBody: JSON.stringify( data ),
          } ).promise().then( res => {
            console.log( "SQS send: " + JSON.stringify( res ) );
            console.log( "Streaming data: " + JSON.stringify( data ) );
          }
          ).catch( err => console.log( err ) );

        } )
        .on( 'error', ( error: any ) => {
          console.error( "Error during Stream: " + error );
        } )
        .on( 'end', async () => {
          console.log( "This is the end of Stream" );
        } );

      await s3.copyObject( {
        Bucket: process.env.BUCKET,
        CopySource: `${process.env.BUCKET}/${record.s3.object.key}`,
        Key: record.s3.object.key.replace( uploadFolder, parsedFolder )
      } ).promise().then( () => {
        console.log( "file was moved" );
      } ).catch( ( e: string ) => {
        console.error( "Error during copy: " + e );
      } );

      await s3.deleteObject( {
        Bucket: process.env.BUCKET,
        Key: record.s3.object.key
      } ).promise().then( () => {
        console.log( "file was deleted" );
      } ).catch( ( e: string ) => {
        console.error( "Error during deletion: " + e );
      } );
    } ).catch( ( err ) => {
      console.log( "Error with key: " + err );
      statusCode = 403;
    } );

  };

  return formatJSONResponse( statusCode, {} );
};

export const main = middyfy( importFileParser );
