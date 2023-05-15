/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
  const splitString = str.split("")
  
  splitString[0] = splitString[0].toUpperCase()

  for (i=0; i<splitString.length; i++) {
    if (splitString[i] === " ") {
        splitString[i+1] = splitString[i+1].toUpperCase()
    }
  }

  return splitString.join("")
};

module.exports = capitalize;
