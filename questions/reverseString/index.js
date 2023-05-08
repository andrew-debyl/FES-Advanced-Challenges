/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// 1
/*const reverseString = (str) => {
    let newStr = ''

    for (i=1; i<str.length+1; i++)
    {
        newStr += str[str.length-i]
    }

    return newStr
};*/

// 2
/*const reverseString = (str) => {
    let newStr = ''

    for (let char of str)
    {
        newStr = char + newStr
    }

    return newStr
};*/

// 3
/*const reverseString = (str) => {
    const arr = str.split('')
    return arr.reverse().join('')
};*/

// 4 (BEST SOLUTION)
const reverseString = (str) => {
    return str.split('').reduce((accumulator, current) => current+accumulator)
};


module.exports = reverseString;
