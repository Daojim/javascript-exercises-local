const sumAll = function (num1, num2) {
  let total = 0;
  if (num1 < 0 || num1 < 0) {
    return "ERROR";
  }
  if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
    return "ERROR";
  }
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      total += i;
    }
  } else {
    for (i = num1; i >= num2; i--) {
      total += i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
