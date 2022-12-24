/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var U = moves.toLowerCase().match(/u/g);
    var D = moves.toLowerCase().match(/d/g);
    var L = moves.toLowerCase().match(/l/g);
    var R = moves.toLowerCase().match(/r/g);
    if (U !== null) {
        U = U.length
    }
    if (D !== null) {
        D = D.length
    }
    if (L !== null) {
        L = L.length
    }
    if (R !== null) {
        R = R.length
    }
    if (U === D && L === R) {
        return true
    }
    else {
        return false
    }
};