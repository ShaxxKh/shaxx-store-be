import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from '../../libs/apiGateway';
import axios from 'axios';
import { SNS } from "aws-sdk";

const catalogBatchProcess = async ( event: { Records: any[]; } ) => {
  console.log( "Request: " + JSON.stringify( event ) );
  const sns = new SNS( { region: "eu-west-1" } );
  let statusCode = 200;
  const products = event.Records.map( ( { body } ) => JSON.parse( body ) );
  console.log( process.env.SNS_ARN );


  try {
    for ( const product of products ) {
      axios( {
        method: "POST",
        url: `${process.env.PRODUCT_SERVICE_URL}/products`,
        data: Object( product )
      } ).then( res => {
        console.log( res );
      } ).catch( e => {
        console.error( e );
      } );

      await sns.publish( {
        Subject: `${product.title} has been created.`,
        Message: JSON.stringify( product ),
        TopicArn: process.env.SNS_ARN,
        MessageAttributes: {
          count: {
            DataType: 'Number',
            StringValue: `${product.count}`
          }
        },
      } ).promise().then( res => console.log( "SNS publish: " + JSON.stringify( res ) )
      ).catch( e => console.log( "SNS publish: " + e ) );
    }
  } catch ( error ) {
    console.error( error );
  }


  console.log( products );

  return formatJSONResponse( statusCode, {} );
};

export const main = middyfy( catalogBatchProcess );
