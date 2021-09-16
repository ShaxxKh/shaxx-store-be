import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Client } from "pg";

import dbOptions from "@libs/dbOptions";
import sql from "sql-tagged-template-literal";
// import { error } from "console";
// import productList from "./../productList.json";
// import schema from "./schema";

const getProductsList: ValidatedEventAPIGatewayProxyEvent<Object> = async (
  event
) => {
  console.log("Request: " + JSON.stringify(event));
  const client = new Client(dbOptions);
  let productList = [];
  let statusCode: number = 200;
  let message: string;
  await client.connect();

  try {
    productList = await client
      .query(
        sql`
			select pr.id, title, description, price,st.count
			from products pr 
			join stocks st
			on st.product_id = pr.id
			`
      )
      .then((res) => res.rows);

    if (productList.length === 0) {
      message = "No products";
    } else {
      message = "Here are your products";
    }
  } catch (e) {
    console.error("Error during connection to database: " + e);
    statusCode = 500;
    message = "Happened Some technical problems";
  } finally {
    client.end();
  }

  return formatJSONResponse({
    statusCode: statusCode,
    // headers: {
    // 	"Access-Control-Allow-Headers": "*",
    // 	"Access-Control-Allow-Origin": "*",
    // 	"Access-Control-Allow-Methods": "*",
    // },
    message,
    data: productList,
  });
};

export const main = middyfy(getProductsList);
