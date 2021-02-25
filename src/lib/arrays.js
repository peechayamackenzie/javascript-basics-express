const getNthElement = (index, array) => {
  return array[index %array.length];
};

const arrayToCSVString = array => {
  return array.toString(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(x => x.toUpperCase());
};

function reverseWordsInArray(strings) {
  return strings.map(a => a.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(even => (even % 2) !== 1);
};

const removeNthElement2 = (index, array) => {
  return array.filter(remove => remove !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(vowelstring => vowelstring.match(/^(a|e|i|o|u)/gi));
};
// ^is for first charactor

const removeSpaces = string => {
  return string.replace( /\s/g, '');
};
// \s is 'whitespace'

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => (acc + number), 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
