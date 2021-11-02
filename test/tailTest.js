// const assertArraysEqual = require("../assertArraysEqual.js");
// const tail = require("../tail.js");
// assertArraysEqual(tail([5,6,7]) , [6,7]);
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
// assertArraysEqual(tail([8]), []);
// assertArraysEqual(tail([]), undefined);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});