/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// USING A CHARACTER MAP

const maxCharacter = (str) => {
  /* JUNIOR WAY OF DOING IT
  const charArr = {}
  let max=0
  let maxChar = ''

  // Better way of getting character array
  // Saying if its the first time you see the letter it will be false
  //   so it will set it to 1. But if its not the first time you
  //   see the letter it wont be undefined so you increment it
  for (let char of str) {
    charArr[char] = (charArr[char] + 1) || (1)
  }

  // If your looping through an object, need to use a for 'in' loop
  for (let char in charArr) {
    if (charArr[char] > max) {
        max = charArr[char]
        maxChar = char
    }
  }*/

  // TOP TECH WAY OF DOING IT
  // Use the Map structure because its designed to be iterated over.
  const charMap = new Map()
  let max = 0
  let maxChar = 0

  for (let char of str) {
    const count = charMap.get(char) //need to get the value from a Map structure with 'get'
    charMap.set(char, count + 1 || 1) //first argument is the key (letter), and the second is the value
  }

  //When you loop over it, you get the key and value inside an array
  for (let [char, count] of charMap) {
    if (count > max) {
        max = count
        maxChar = char
    }
  }

  return maxChar

};

module.exports = maxCharacter;
