// const assertArraysEqual = require("../assertArraysEqual.js");
// const middle = require("../middle.js");
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5,5]), [3,4]) // => [3, 4]


const assert = require('chai').assert;
const middle   = require('../middle.js');
describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3,4]", () => {
    assert.deepEqual(middle([1, 2, 3,4]), [2,3]);
  });
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]); 
  });
});