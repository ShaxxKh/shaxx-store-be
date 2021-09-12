import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Client } from "pg";

import dbOptions from "@libs/dbOptions";
import sql from "sql-tagged-template-literal";

import schema from "./schema";
import validator from "@middy/validator";

const createProduct: ValidatedEventAPIGatewayProxyEvent<Object> = async (
  event
) => {
  console.log("Request: " + JSON.stringify(event));
  console.log("Request: " + event);

  const { count, price, title, description } = Object(event.body);
  const client = new Client(dbOptions);
  let productUuid: number;
  let message: string = "";
  let statusCode: number = 200;
  await client.connect();

  try {
    await client.query(sql`BEGIN`);

    productUuid = await client
      .query(
        sql`
				insert into products (title, description, price )
				values (${title}, ${description}, ${price})
				returning id
			`
      )
      .then((res) => res.rows[0].id);

    await client.query(sql`
				insert into stocks
				values(${productUuid}, ${count})
			`);

    await client.query(sql`COMMIT`);

    message = "New product created successfully";
  } catch (e) {
    await client.query(sql`ROLLBACK`);
    console.error("Error during connection to database: " + e);
    message = "Product is not created due to technical problems";
    statusCode = 500;
  } finally {
    client.end();
  }

  return formatJSONResponse({
    statusCode: statusCode,
    message,
    data: [],
  });
};

export const main = middyfy(createProduct).use(
  validator({ inputSchema: schema })
);
