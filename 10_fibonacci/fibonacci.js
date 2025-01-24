const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  fiboArray = [0, 1];

  for (i = 0; i < number; i++) {
    let lastIndex = fiboArray.length - 1;
    fiboArray.push(fiboArray[lastIndex] + fiboArray[lastIndex - 1]);
  }
  console.log(fiboArray);
  return fiboArray[number];
};

// Do not edit below this line
module.exports = fibonacci;
