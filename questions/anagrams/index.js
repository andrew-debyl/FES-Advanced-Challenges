/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

// BEST PRACTICE WITHOUT CHARACTER MAP
// convert to an array and then sort alphabetically
const anagrams = (strA, strB) => {
    return removeSpaceAndLowerCaseAndSort(strA) === removeSpaceAndLowerCaseAndSort(strB)
}

const removeSpaceAndLowerCaseAndSort = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  };


// CHARACTER MAP WAY
// Can use 'replaceAll' where the first argument is the character you
//   want to replace and the second is the character you want to
//   replace it with

const anagrams1 = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (charMapA.size !== charMapB.size) {
    return false
  }

  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
        return false
    }
  }

  return true
};


// Building the map
const buildCharMap = (str) => {
  const charMap = new Map();

  for (const char of removeSpaceAndLowerCase1(str)) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  return charMap
};

//Getting ride of spaces and uppercase letters before mapping it
const removeSpaceAndLowerCase1 = (str) => {
  return str.toLowerCase().replaceAll(" ", "");
};

module.exports = anagrams;
