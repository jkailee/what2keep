///import {  } from "./index";
const myFunctions = require("./dbCalls.js");

// test("Testing portfolio -- create empty portfolio", () => {
//   expect(portfolio.currentPortfolio).toEqual({});
// });

test("Testing testing", async () => {
  const res = await myFunctions.testing();
  expect(res).toBe(true);
});
