const without = function(source,itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1,2,3,"elephant",6],["elephant",6]));
console.log(without([3,4,9,"One"],[4]));