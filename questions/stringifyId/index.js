/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
    // first we are mapping over the object and setting all the ids into 1 variable
    const idArray = arr.map((obj) => obj.id)

    /* BRUTE FORCE WAY
    // brute for way for removing duplicate items:
    // Going through every element in idArray
    // Then checking if uniqueArray contains that id or not
    // If it doesn't then it adds it, and if it does, then it goes to the next one
    const uniqueArray = []
    for (let id of idArray) {
        if (!uniqueArray.includes(id)) {
            uniqueArray.push(id)
        }
    }*/

    // TOP TECH WAY
    // Set operator removes duplicates
    // Then using the spread operator to spread the elements into an array
    const uniqueArray = [...new Set(idArray)]


    /* Brute force way for converting to string with commas:
    // Going through the uniqueArray
    // Checking if we are not on the last iteration of the loop (add a comma)
    // Then we add to the string with a comma
    // But, if we are on the last iteration, we just add to the string
    let idString = ""
    for (let i=0; i<uniqueArray.length; i++) {
        if (i !== uniqueArray.length - 1) {
            idString += `${uniqueArray[i]}, `
        }
        else {
            idString += uniqueArray[i]
        }
    } */

    // TOP TECH WAY\
    // Using the join method to join the elements in the array
    // And make them seperated by a comma and space
    idString = uniqueArray.join(', ')

    return idString
};

module.exports = stringifyId;
