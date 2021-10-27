const eqArrays = function(a, b) {
  let result = false;
  if(a.length === 0 && b.length === 0){
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

const middle = function(arr){
  let midPos = (Math.ceil(arr.length/2));
  if((arr.length) % 2 === 0){
    return arr.splice(midPos-1, 2);
  }else{
    return arr.splice(midPos-1, 1);
  }
}

assertEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3, 4]
