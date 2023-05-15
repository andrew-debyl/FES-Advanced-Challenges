/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

const arrayChunk = (array, size) => {
    //empty array to store sub-arrays
    const chunkedArray = []

    //loops over indexes in the aray divisible by 'size'
    for (let i=0; i<array.length; i+=size) {
        // getting the slice we need of length size from the array
        //first number slices from and including, and the second number slices to and excluding
        const subArray = array.slice(i, i + size)

        //adding to array
        chunkedArray.push(subArray)
    }

    return chunkedArray
};

module.exports = arrayChunk;
