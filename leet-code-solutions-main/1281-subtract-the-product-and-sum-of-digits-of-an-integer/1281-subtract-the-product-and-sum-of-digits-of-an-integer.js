/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const arr = n.toString().split("");
    let product = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        product = product * parseInt(arr[i]);
        sum += parseInt(arr[i]);
    }
    return product - sum;

};

