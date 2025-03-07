/* 
1. Write a function to find the largest number in an array.
2. How would you flatten a nested array (e.g., [1, [2, [3, 4]]] → [1, 2, 3, 4])?
3. Sorts an array from ascending to descending deck of cards = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'King', 'Queen']
4. Implement a function to remove duplicates from an array.
5. Write a function to merge two sorted arrays into one sorted array.
*/

// first question
const numbers: number[] = [5, 6, 14, 12, 9, 20];

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

type NestedArray = number | NestedArray[];
// using recursion
const flattenArray = (arr: NestedArray[]) => {
  let result: number[] = [];

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
const cards: (string | number)[] = [
  "Jack",
  8,
  2,
  2,
  6,
  "King",
  5,
  3,
  "Queen",
  "King",
  "Queen",
];

const sortString = () => {
  let stringArray: string[] = [];
  let numberArray: number[] = [];

  for (let i = 0; i < cards.length; i++) {
    if (typeof cards[i] === "string") {
      stringArray.push(cards[i] as string);
    } else if (typeof cards[i] === "number") {
      numberArray.push(cards[i] as number);
    }
  }

  const sortedString = stringArray.sort();
  const sortedNumbers = numberArray.sort((a, b) => a - b);

  const newArray: (string | number)[] = [...sortedString, ...sortedNumbers];
  return newArray;
};

console.log(sortString());

//fourth question
const numArray = [2, 3, 4, 2, 5, 5, 4, 6];

const removeDuplicates = (arr: number[]) => {
  const noDuplicateArray: number[] = [];

  for (const item of arr) {
    if (!noDuplicateArray.includes(item)) {
      noDuplicateArray.push(item);
    }
  }
  return noDuplicateArray;
};

console.log(removeDuplicates(numArray));

// fifth question
function mergeArrays<T extends number | string>(arrayOne: T[], arrayTwo: T[]) {
  const checkArrayOneType = arrayOne.every((item) => typeof item === "string");

  const sortedArrayOne = checkArrayOneType
    ? (arrayOne as string[]).sort()
    : (arrayOne as number[]).sort((a: number, b: number) => a - b);

  const checkArrayTwoType = arrayTwo.every((item) => typeof item === "string");

  const sortedArrayTwo = checkArrayTwoType
    ? (arrayTwo as string[]).sort()
    : (arrayTwo as number[]).sort((a: number, b: number) => a - b);

  let i = 0,
    j = 0;
  const mergeArrayVal = [];

  while (i < sortedArrayOne.length && j < sortedArrayTwo.length) {
    if (sortedArrayOne[i] > sortedArrayTwo[j]) {
      mergeArrayVal.push(sortedArrayTwo[j]);
      j++
    } else {
      mergeArrayVal.push(sortedArrayOne[i]);
      i++;
    }
  }

  while (i < sortedArrayOne.length) {
    mergeArrayVal.push(sortedArrayOne[i]);
    i++;
  }

  while (j < sortedArrayTwo.length) {
    mergeArrayVal.push(sortedArrayTwo[j]);
    j++
  }

  return mergeArrayVal;
}

console.log(
  mergeArrays<string | number>(
    ["Jack", "King", "Queen", "King", "Queen"],
    [8, 2, 2, 6, 5, 3]
  )
);
