const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

const findKeyByValue = function(objToIterate, val){
  for(let o in objToIterate){
    if(objToIterate[o] === val){
      return o;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Ex"), undefined);
