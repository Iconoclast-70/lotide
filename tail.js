const tail = function(tArray) {
  if (tArray.length > 0) {
    let vTail = tArray.slice(1);
    return vTail;
  } else {
    return tArray;
  }
};

module.exports = tail;
  

