const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

const findKey = function(objToIterate, callback){
  for(let o in objToIterate){
    if(callback(objToIterate[o])){
      return o;
    }
  }
}

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj, x => x.stars === 3),"Akaleri"); 
assertEqual(findKey(obj, x => x.stars === 2),"noma"); 
assertEqual(findKey(obj, x => x.stars === 6),undefined); 