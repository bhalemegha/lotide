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

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  } else {
    console.log("undefined");
  }
};

const without = function(source,itemsToRemove) {
  let arr = source;
  for (let filterItem of itemsToRemove) {
    for (let item of source) {
      if (filterItem === item) {
        arr.splice(arr.indexOf(item), 1);
        break;
      }
    }
  }
  console.log(arr);
  return arr;
};