/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
  const columWidth = (n*2)-1
  let middle = Math.floor(columWidth/2)

  for (row = 0; row < n; row++) {
    let pymd = "";
    for (col = 0; col < columWidth; col++) {
        if (col >= middle-row && col <= middle+row) {
            pymd+="#"
        }
        else {
            pymd+=" "
        }
    }
    console.log(pymd);
  }
};

module.exports = pyramid;
