import type { AWS } from "@serverless/typescript";

import importProductsFile from '@functions/importProductsFile';

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
      { Effect: "Allow", Action: "s3:*", Resource: "arn:aws:s3:::task-5/*" }
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      PG_HOST: process.env.PG_HOST,
      PG_PORT: process.env.PG_PORT,
      PG_DATABASE: process.env.PG_DATABASE,
      PG_USERNAME: process.env.PG_USERNAME,
      PG_PASSWORD: process.env.PG_PASSWORD,
    },
    lambdaHashingVersion: "20201221",
  },

  // import the function via paths
  functions: { importProductsFile },
};

module.exports = serverlessConfiguration;