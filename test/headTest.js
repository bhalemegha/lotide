const assertEqual = require("../assertEqual.js");
const head = require("../head");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);
assertEqual(head([]), undefined);