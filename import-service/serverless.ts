import type { AWS } from "@serverless/typescript";

import importProductsFile from '@functions/importProductsFile';
import importFileParser from '@functions/importFileParser';
import catalogBatchProcess from "@functions/catalogBatchProcess";

const serverlessConfiguration: AWS = {
  service: "import-service",
  frameworkVersion: "2",
  useDotenv: true,
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: [ "serverless-webpack" ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "eu-west-1",
    iamRoleStatements: [
      { Effect: "Allow", Action: "s3:ListBucket", Resource: "arn:aws:s3:::task-5" },
      { Effect: "Allow", Action: "s3:*", Resource: "arn:aws:s3:::task-5/*" },
      { Effect: "Allow", Action: "sqs:*", Resource: { "Fn::GetAtt": [ "SQSQueue", "Arn" ] } },
      { Effect: "Allow", Action: "sns:*", Resource: { Ref: "SNSTopic" } }
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      BUCKET: process.env.BUCKET,
      SQS_URL: {
        Ref: "SQSQueue"
      },
      SNS_ARN: {
        Ref: "SNSTopic"
      },
      PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL
    },
    lambdaHashingVersion: "20201221",
  },
  resources: {
    Resources: {
      SQSQueue: {
        Type: "AWS::SQS::Queue",
        Properties: {
          QueueName: "catalogItemsQueue"
        }
      },
      SNSTopic: {
        Type: "AWS::SNS::Topic",
        Properties: {
          TopicName: "createProductTopic"
        }
      },

      createProductSubLargeAmount: {
        Type: 'AWS::SNS::Subscription',
        Properties: {
          Endpoint: "sop.ugc2@gmail.com",
          Protocol: 'email',
          TopicArn: {
            Ref: 'SNSTopic',
          },
          FilterPolicy: {
            count: [ { 'numeric': [ '>', 4 ] } ]
          },
        },
      },
      createProductSubSmallAmount: {
        Type: 'AWS::SNS::Subscription',
        Properties: {
          Endpoint: "helenasurmilova@gmail.com",
          Protocol: 'email',
          TopicArn: {
            Ref: 'SNSTopic',
          },
          FilterPolicy: {
            count: [ { 'numeric': [ '<=', 2 ] } ]
          },
        }
      },
      GatewayResponseDefault4XX: {
        Type: "AWS::ApiGateway::GatewayResponse",
        Properties: {
          ResponseParameters: {
            "gatewayresponse.header.Access-Control-Allow-Origin": "'*'",
            "gatewayresponse.header.Access-Control-Allow-Headers": "'*'"
          },
          ResponseType: "DEFAULT_4XX",
          RestApiId: {
            Ref: "ApiGatewayRestApi"
          }
        }
      },
      GatewayResponseDefault5XX: {
        Type: "AWS::ApiGateway::GatewayResponse",
        Properties: {
          ResponseParameters: {
            "gatewayresponse.header.Access-Control-Allow-Origin": "'*'",
            "gatewayresponse.header.Access-Control-Allow-Headers": "'*'"
          },
          ResponseType: "DEFAULT_5XX",
          RestApiId: {
            Ref: "ApiGatewayRestApi"
          }
        }
      }
    }
  },
  // import the function via paths
  functions: { importProductsFile, importFileParser, catalogBatchProcess },
};

module.exports = serverlessConfiguration;