/* 
1. Write a function to find the largest number in an array.
2. How would you flatten a nested array (e.g., [1, [2, [3, 4]]] → [1, 2, 3, 4])?
3. sorts an array from ascending to descending deck of cards = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'King', 'Queen']
*/

// first question
const numbers = [5, 6, 14, 12, 9, 20];

const findLargestNumber = () => {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= largest) {
      largest = numbers[i];
    }
  }
  return largest;
};

console.log(findLargestNumber());

//second question
const nestedArray = [1, [2, [3, 4]]];

// using recursion
const flattenArray = (arr) => {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flattenArray(nestedArray));

//third question
const cards = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'King', 'Queen'];

const sortString = () => {
  let stringArray = [];
  let numberArray = [];

  for (let i = 0; i < cards.length; i++) {
    if (typeof(cards[i]) === 'string') {
      stringArray.push(cards[i]);
    } else if(typeof(cards[i]) === 'number') {
      numberArray.push(cards[i]);
    }
  }

  const sortedString = stringArray.sort();
  const sortedNumbers = numberArray.sort((a, b) => a - b);
  
  const newArray = sortedString.concat(sortedNumbers)
  return newArray;
};

console.log(sortString());