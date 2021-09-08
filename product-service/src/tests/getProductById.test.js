const { test, expect } = require("@jest/globals");
const {byId} = require('./../functions/getProductById/handler.ts');
const mockEvent = require('./mock.json');
const mockNoProdEvent = require('./mock-no-prod.json');

test('Has body property', async () => {
    const product = await byId(mockEvent);
    // console.log(product);
    expect(product).toHaveProperty("body");
})

test('Has StatusCode', async () => {
    const product = await byId(mockEvent);
    expect(product).toHaveProperty("statusCode");
})

test('Has message', async () => {
    const productStr = await byId(mockEvent);
    const product = JSON.parse(productStr.body);
    console.log(product);
    expect(product.body).toHaveProperty('message');
})

test('Has correct message', async () => {
    const productStr = await byId(mockNoProdEvent);
    const product = JSON.parse(productStr.body);
    expect(product.body.message).toBe("Product not found");
    
})
