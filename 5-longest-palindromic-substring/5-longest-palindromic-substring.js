/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  let ll = 0, rr = 0;
  
  for (let i = 0; i < s.length; i++)
    for (let j of [i, i+1])
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
  
  return s.substring(ll, rr+1);
}