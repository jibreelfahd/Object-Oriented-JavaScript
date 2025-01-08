/* 
Write a function to reverse a string without using built-in methods.
*/

const dummyString = "extraterrestrial";

const reverseString = () => {
  let reveresed = ''
  for (let i = dummyString.length - 1; i >= 0; i--) {
    reveresed += dummyString[i];
  }
  return reveresed
};

console.log(reverseString());
