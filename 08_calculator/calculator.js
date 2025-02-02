const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((product, currentNum) => product * currentNum);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let product = 1;
  for (i = num; i >= 1; i--) {
    product *= i;
  }
  return product;
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
