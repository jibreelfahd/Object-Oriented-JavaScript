/* 
Create a function that checks if a given string is a palindrome.
*/

const checkPalindrome = (str: string) => {
  const string = str.toLowerCase().split(' ').join('');
  let backwardStr = "";
  for (let i = string.length - 1; i >= 0 ; i--) {
    backwardStr += string[i];
    
  }
  return string === backwardStr;
};

console.log(checkPalindrome("madam"));
