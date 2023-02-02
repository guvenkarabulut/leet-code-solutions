/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length;
  const m = target.length;
  if (n !== m) return false;
  const rotate = (mat) => {
    const n = mat.length;
    const m = mat[0].length;
    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        res[j][n - i - 1] = mat[i][j];
      }
    }
    return res;
  };
  for (let i = 0; i < 4; i++) {
    if (JSON.stringify(mat) === JSON.stringify(target)) return true;
    mat = rotate(mat);
  }
  return false;

};