import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const AWS = require( "aws-sdk" );

const importProductsFile: ValidatedEventAPIGatewayProxyEvent<Object> = async ( event ) => {
  console.log( "Request: " + JSON.stringify( event ) );
  const s3 = new AWS.S3( { region: "eu-west-1" } );
  const { name } = event.queryStringParameters;
  const catalogPath = `uploaded/${name}`;
  let signedUrl: any;
  let statusCode = 200;

  const params = {
    Bucket: process.env.BUCKET,
    Key: catalogPath,
    Expires: 60,
    ContentType: "text/csv"
  };

  if ( name ) {
    signedUrl = await s3.getSignedUrlPromise( 'putObject', params );

  } else {
    statusCode = 403;
  }


  console.log( signedUrl );

  console.log( formatJSONResponse( statusCode, signedUrl ) );


  return formatJSONResponse( statusCode, signedUrl );
};

export const main = middyfy( importProductsFile );
