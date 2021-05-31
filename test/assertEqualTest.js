const assertEqual = require("../assertEqual.js");
const assert = require("chai").assert;

describe("#assertEqual", () => {
  it("returns true for two identical strings", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"),true);
  });
  it("returns true for two identical numbers", () => {
    assert.strictEqual(assertEqual(1, 1),true); 
  });
});
