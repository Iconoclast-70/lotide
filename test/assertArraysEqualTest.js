const assertArraysEqual = require("../assertArraysEqual.js");
const assert = require("chai").assert;

describe("#assertArraysEqual", () => {
  it("returns true for two identical string arrays", () => {
    assert.strictEqual( assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for arrays containing different data types", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); 
  });
  it("returns true for two identical number arrays", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); 
  });
  it("returns false for arrays of different lengths", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3]), false); 
  });
});
