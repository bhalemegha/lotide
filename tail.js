const tail = function(arr) {
  let array1 = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      array1.push(arr[i]);
    }
  }
  console.log(array1);
  return array1;
};

module.exports = tail;
