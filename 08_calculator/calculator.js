const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let total = num;
  if (num === 0) {
    return 1;
  }
  for (i = num - 1; i >= 1; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
