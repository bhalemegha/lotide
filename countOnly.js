const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed:  + ${actual} +   ===  + ${expected}`);
  } else {
    console.log(`🔴Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const newObj = {    
  }
  for (let itemCount in itemsToCount) {
    let count = 0;
    if (itemsToCount[itemCount]){
      for (let item of allItems){
        if (item === itemCount) {
          count++;
        }
      }
      if (count != 0) {
        newObj[itemCount] = count;
      }
    }
  }
  return newObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
