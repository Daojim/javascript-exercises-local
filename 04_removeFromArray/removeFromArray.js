const removeFromArray = function (array, ...args) {
  let newArray = Array.from(array);
  newArray = newArray.filter((e) => !args.includes(e));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
