
const letterPositions = function(str){
  const results = {};
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
        results[ch] = obj1;
      }
    }
  }
  return results;//letterWithPos;
};
console.log(letterPositions("LHL"));
console.log(letterPositions("lighthouse in the house"));