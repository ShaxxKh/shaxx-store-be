export default {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        title: {
          type: "string",
          minLength: 5,
          maxLength: 20,
          pattern: "^[a-zA-Z ]*$",
        },
        description: { type: "string", minLength: 5, maxLength: 30 },
        price: { type: "number" },
        count: { type: "number" },
      },
      required: ["title", "description", "price", "count"],
    },
  },
} as const;
