const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};
const countLetters = function(str){
  let letters = [];
  let readCount = [];
  let obj = {};
  for (let ch of str) {
    let count = 0;
    if(!(Object.keys(obj).includes(ch))) {
      for (let c of str){
        if(ch === c ) {
          count++;
        } 
      }
      if(count){
        obj[ch] = count;
      }
    }
  }
  return obj;
};

assertEqual(countLetters("LHL")["H"],1);
assertEqual(countLetters("LHL")["L"],2);
assertEqual(countLetters("JAVASCRIPT")["A"],2);