const reverseString = function (string) {
  let reversedString = "";
  const myArray = string.split(" ");
  for (i = string.length; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
