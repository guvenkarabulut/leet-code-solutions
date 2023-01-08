/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    var controller=true
    for(let i=2;i<=n-2;i++){
        let difBase=n.toString(i)
        for(let j=0;j<difBase.length;j++){
            if(difBase.charAt(j)===difBase.charAt(difBase.length-1)){
                controller=true
            }
            else{
                return false;
            }
        }
    }
    return controller
};