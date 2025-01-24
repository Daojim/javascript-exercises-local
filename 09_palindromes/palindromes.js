const palindromes = function (string) {
  const newStr = string
    .replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();
  const array = Array.from(newStr);

  const middleNumber = Math.floor(array.length / 2);

  const lastIndex = array.length - 1;

  for (i = 0; i < middleNumber; i++) {
    if (array[i] !== array[lastIndex - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
