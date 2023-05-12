/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
    const reversed = parseInt(int.toString().split("").reverse().join(""))

    return int < 0 ? reversed * -1 : reversed
};

//First we are converting to a string and then into an array. 
// we are then reversing it and then joining it back into a string
// then we are converting it back into an integer
// then we are returing the negative version if its a negative

module.exports = reverseInteger;
