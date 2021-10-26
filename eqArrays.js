const eqArrays = function(a, b) {
  let result = false;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);