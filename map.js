const eqArrays = function(a, b) {
  let result = false;
  if (a.length === 0 && b.length === 0) {
    result = true;
  }
  if (typeof a !== 'undefined' && typeof b !== 'undefined' && a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      result = b.indexOf(a[i]) !== -1;
      if (result === false) {
        break;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  } else {
    console.log("undefined");
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results)
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[(word.length) - 1]),[ 'd', 'l', 'o', 'r', 'm' ]);
assertArraysEqual(map([], word => word[(word.length) - 1]),[]);
