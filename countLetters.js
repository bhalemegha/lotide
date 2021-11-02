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
module.exports = countLetters;
