const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns false if middelEven and middleOdd are not equal", () => {
    const middleEven = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const middleOdd = [1,2,3];
    assert.deepEqual(middle(middleEven), middle(middleOdd));
  });
});
