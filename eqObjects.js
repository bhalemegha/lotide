const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let i in object1) {
      if(typeof object1[i] ==='object'){
        result = eqArrays(object1[i],object2[i]);
      } else if (object1[i] === object2[i]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd3 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd3)); 
