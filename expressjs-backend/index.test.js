///import {  } from "./index";
const myFunctions = require("./index.js");

test("Testing portfolio -- create empty portfolio", () => {
  expect(portfolio.currentPortfolio).toEqual({});
});
