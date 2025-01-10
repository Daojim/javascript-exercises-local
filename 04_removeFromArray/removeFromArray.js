const removeFromArray = function (array, values) {
  let newArray = Array.from(array);
  newArray = newArray.filter((e) => e !== values);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
