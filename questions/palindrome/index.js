/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
  const newStr = str.split('').reduce((acc, cur) => (cur+acc))
  if(newStr === str) {
    return true
  }
  return false
};

// First splitting into an arr because 'reduce' takes and array and reduces to one
// then it loops through the word where 'acc' is the accumulator and cur is the current letter
// so it would go (abba): 
    // acc = b, cur = a, and cur + acc = ab
    // acc = b, cur = ab, and cur + acc = abb
    // acc = a, cur = abb, and cur + acc = abba
// Then we are checking if the reversed is equal to the same as the inital string

module.exports = palindrome;
