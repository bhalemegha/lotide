const compArray = function(a, b) {
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
  if (compArray(actual, expected)) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else if (!compArray(actual, expected)) {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  } else {
    console.log("undefined");
  }
};

const tail = function(arr) {
  let array1 = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      array1.push(arr[i]);
    }
  }
  return array1;
};


assertEqual(tail([5,6,7]) , [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertEqual(tail([8]), undefined);
assertEqual(tail([]), undefined);