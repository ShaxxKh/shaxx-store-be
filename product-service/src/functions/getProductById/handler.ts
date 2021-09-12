import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import { Client } from "pg";
import dbOptions from "@libs/dbOptions";
import sql from "sql-tagged-template-literal";

const getProductById: ValidatedEventAPIGatewayProxyEvent<Object> = async (
  event
) => {
  console.log("Request: " + event);
  const client = new Client(dbOptions);
  client.connect();

  const productId: string = event.pathParameters.id;
  let message: string = "";
  let product: object;
  let statusCode: number = 200;

  try {
    product = await client
      .query(
        sql`
			select pr.id, title, description, price,st.count
			from products pr 
			join stocks st
			on st.product_id = pr.id
			where pr.id = ${productId}
		`
      )
      .then((res) => res.rows[0]);

    if (product === undefined) {
      message = "Product not found";
    } else {
      message = "";
    }
  } catch (e) {
    statusCode = 500;
    message = "Happened some technical problems";
    console.error("Error during connection to database: " + e);
  } finally {
    client.end();
  }

  return formatJSONResponse({
    statusCode: statusCode,
    message,
    data: product || {},
  });
};

export const main = middyfy(getProductById);
export const byId = getProductById;
