import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import getProducts from "@libs/getProducts";
// import productList from "./../productList.json";
// import schema from "./schema";

const getProductsList: ValidatedEventAPIGatewayProxyEvent<Object> =
	async () => {
		const productList = await getProducts();
		let message: string;
		if (productList.length === 0) {
			message = "No products";
		} else {
			message = "Here are your products";
		}
		return formatJSONResponse({
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
			},
			body: {
				message,
				data: productList,
			},
		});
	};

export const main = middyfy(getProductsList);
