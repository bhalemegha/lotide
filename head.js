const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else if (actual !== expected){
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  } else if(typeof expected === typeof actual ){
    console.log("undefined");
  }
};

const head = function(arr){
  if(arr.length >= 1){
    return arr[0];
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);
assertEqual(head([]), undefined);