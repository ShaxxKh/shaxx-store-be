import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import productList from "./../productList.json";
// import { debug } from "console";
// import schema from "./schema";

const getProductById: ValidatedEventAPIGatewayProxyEvent<Object> = async (
	event
) => {
	const productId = event.pathParameters.id;
	let message: string;
	let product = productList.find((el) => el.id === productId);

	// console.log(productId);

	if (product === undefined) {
		message = "Product not found";
	} else {
		message = "";
	}

	// console.log(product);

	// console.trace(event);
	// debug(message)
	console.debug(event)
	return formatJSONResponse({
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
		},
		body: {
			message,
			data: product || {},
		},
	});
};

export const main = middyfy(getProductById);
