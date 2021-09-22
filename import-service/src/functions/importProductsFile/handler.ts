import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const AWS = require( "aws-sdk" );

const hello: ValidatedEventAPIGatewayProxyEvent<Object> = async ( event ) => {
  console.log( "Request: " + JSON.stringify( event ) );
  const s3 = new AWS.S3( { region: "eu-west-1" } );
  const { name } = event.queryStringParameters;
  const bucket = "task-5";
  const catalogPath = `uploaded/${name}`;

  const params = {
    Bucket: bucket,
    Key: catalogPath,
    Expires: 60,
    ContentType: "text/csv"
  };

  const signedUrl = await s3.getSignedUrlPromise( 'putObject', params );
  // const signedUrl = name;

  console.log( signedUrl );


  return formatJSONResponse( signedUrl );
};

export const main = middyfy( hello );
