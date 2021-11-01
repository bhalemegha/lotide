const assertArraysEqual = require("../assertArraysEqual.js");
const tail = require("../tail.js");
assertArraysEqual(tail([5,6,7]) , [6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertArraysEqual(tail([8]), []);
assertArraysEqual(tail([]), undefined);