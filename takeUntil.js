
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(callback(item)){
      return results;
    }
    results.push(item);
  }
  return results;
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, (data) => data === ',' ))

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, (data) => data < 0 ))