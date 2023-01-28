/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let col = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let box = new Array(9).fill(0).map(() => new Array(9).fill(0));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let num = board[i][j] - 1;
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i][num] || col[j][num] || box[k][num]) {
                    return false;
                }
                row[i][num] = col[j][num] = box[k][num] = 1;
            }
        }
    }
    return true;
    
};