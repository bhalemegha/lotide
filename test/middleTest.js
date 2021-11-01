const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5,5]), [3,4]) // => [3, 4]