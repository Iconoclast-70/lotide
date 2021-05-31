const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual.js");
const assert = require("chai").assert;

// TEST CODE

describe("#eqArrays", () => {

  it("returns true for two identical string arrays", () => {
    assert.strictEqual( eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for arrays containing different data types", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
  it("returns true for two identical number arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });
  it("returns false for arrays of different lengths", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); 
  });

});
