function isPalindrome(str) {
  let strLe = str.length;
  if (strLe === 0 || strLe === 1) {
    return true;
  }
  if (str[0] === str[strLe - 1]) {
    return isPalindrome(str.slice(1, strLe - 1) );
  }  
  return false;
};


/* 
  Return true is string is a palindrome
  return false if not
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
