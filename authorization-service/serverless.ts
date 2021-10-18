import type { AWS } from '@serverless/typescript';

import basicAuthorizer from '@functions/basicAuthorizer';

const serverlessConfiguration: AWS = {
  service: 'authorization-service',
  frameworkVersion: '2',
  useDotenv: true,
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [ 'serverless-webpack' ],
  provider: {
    name: 'aws',
    region: "eu-west-1",
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  outputs: {
    AuthorizerArn: {
      Value: {
        'Fn::GetAtt': [ 'BasicAuthorizerLambdaFunction', 'Arn' ]
      },
      Export: {
        Name: "AuthorizerArn"
      }
    }
  },
  // import the function via paths
  functions: { basicAuthorizer },
};

module.exports = serverlessConfiguration;
