import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from '../../libs/apiGateway';
const csvParser = require( "csv-parser" );
const AWS = require( "aws-sdk" );

const importFileParser = async ( event: { Records: any[]; } ) => {
  console.log( "Request: " + JSON.stringify( event ) );
  const s3 = new AWS.S3( { region: "eu-west-1" } );
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

      const startedStream = await s3Stream.pipe( csvParser() )
        .on( 'data', ( data: any ) => {
          console.log( "Streaming data: " + JSON.stringify( data ) );
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
