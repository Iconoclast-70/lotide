

const without = function(source,itemsToRemove) {
  let withoutArray = [];
  for (let r = 0; r < itemsToRemove.length; r++) {
    for (let s = 0; s < source.length; s++) {
      if ( itemsToRemove[r] === source[s] ) { //&& ( typeof(source[r]) === typeof(itemsToRemove[s]) )   ) {
        withoutArray.push(source[s]);
      }
    }
  }
  return source.filter(item => !withoutArray.includes(item));
};

/*
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3, 4], [1, 2, 3]);

const without = function(source,itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
}; 
*/

console.log(eqArrays([1, 2, 3], [1, 2]));// => [2, 3]
console.log(eqArrays(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(eqArrays([1,2,3,6],[6,3]));
console.log(eqArrays([3,4,9,"One"],[4]));

module.exports = without;
