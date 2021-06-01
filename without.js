

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

module.exports = without;
