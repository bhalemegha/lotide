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
    if(!letters.includes(ch)/* && !letters["read"] && !letters[ch]*/) {
      for (let c of str){
        if(ch === c ) {
          count++;
        } 
      }
      if(count){
        letters.push(ch)
        readCount.push(count);
        obj[ch] = count;
      }
    }
  }
  console.log(obj);
  console.log(readCount);
  return obj;
};

countLetters("This is my counting programme");