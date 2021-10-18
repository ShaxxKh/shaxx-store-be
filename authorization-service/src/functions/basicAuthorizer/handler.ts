import 'source-map-support/register';

// import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const basicAuthorizer = async ( event ) => {
  console.info( JSON.stringify( event ) );
  let statusCode: number = 200;
  let effect: string = "Deny";
  let token: string = "";
  // const { token } = event.queryStringParameters;

  if ( event.authorizationToken ) {
    token = event.authorizationToken.split( " " )[ 1 ];
    const buff = Buffer.from( token, "base64" );
    const creds = buff.toString( "utf-8" ).split( ":" );

    const username = creds[ 0 ];
    const password = creds[ 1 ];
    console.log( "token: " + token );

    console.log( "creds: " + creds );


    const storedPassword = process.env[ username ];

    if ( storedPassword === password ) {
      effect = "Allow";
    } else {
      statusCode = 403;
    }
  } else {
    statusCode = 401;
  }

  const policy = generatePolicy( token, event.methodArn, effect );

  console.log( "policy: " + JSON.stringify( policy ) );


  return policy;
};

const generatePolicy = ( principalId, resource, effect ) => {
  return {
    principalId: principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource
        }
      ]
    }
  };
};

export const main = middyfy( basicAuthorizer );
