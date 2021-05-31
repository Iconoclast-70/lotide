const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");
const assert = require("chai").assert;

describe("#tail", () => {
  const result = tail(["Hello","Lighthouse","Labs"]);
  it("returns true if the first element is Lightouse", () => {
    assert.deepEqual(result[0],"Lighthouse");
  });
  it("returns true if the second element is Labs", () => {
    assert.deepEqual(result[1],"Labs");
  });
});
