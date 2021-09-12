// import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";
import createProductSchema from "./../../schemas/requestSchema.json";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "products",
        cors: true,
        request: {
          schemas: {
            "application/json": {
              schema: createProductSchema,
              name: "PostCreateModel",
              description: "Validation model for Creating Posts",
            },
          },
        },
      },
    },
  ],
};
