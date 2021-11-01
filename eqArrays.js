
const eqArrays = function(a, b) {
  let result = false;
  if (typeof a !== 'undefined' && typeof b !== 'undefined' ) {
    if(a.length === 0 && b.length === 0){
    result = true;
    }
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        result = b.indexOf(a[i]) !== -1;
        if (result === false) {
          break;
        }
      }
    }
  }
  return result;
};
module.exports = eqArrays;