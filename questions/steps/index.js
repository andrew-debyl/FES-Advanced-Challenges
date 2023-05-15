/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
    for (row=0; row < n; row++) {
        let step = ""
        for (column=0; column < n; column++) {
            if(column<=row) {
                step+="#"
            }
            else {
                step+=" "
            }
        }
        console.log(step)
    }
};

module.exports = steps;
