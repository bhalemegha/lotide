const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};
const letterPositions = function(str){
  let letters = [];
  let letterWithPos = [];
  let obj = {};
  for (let ch in str) {
    let count = 0; let pos = [];let obj1 = {};
    if(!(Object.keys(obj).includes(str[ch])) && (str[ch] !== " " && str[ch] !== " ")) {
      for (let c in str){
        if(str[ch] === str[c] ) {
          count++;
          pos.push(c);
        } 
      }
      if(count){
        obj[str[ch]] = count;
        obj1[str[ch]] = count;
        obj1["position"] = pos;
        letterWithPos.push(obj1);
      }
    }
  }
  return letterWithPos;
};
console.log(letterPositions("LHL") + "\n");
console.log(letterPositions("lighthouse in the house"));