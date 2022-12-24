/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
    //li ve ri adlı iki değişken tanımlanır ve bu değişkenler en uzun palindrom stringinin ilk ve son karakterlerinin indexlerini saklar.
    let li = 0, ri = 0;
    //bir for döngüsü oluşturulur ve bu döngüde stringin tüm karakterlerine ulaşılır.
    for (let i = 0; i < s.length; i++)
        //Her bir karakter için, j adlı bir değişken oluşturulur ve bu değişkene i ve i+1 değerleri atanır. Bu sayede, her bir 
        //karakterin sol ve sağ tarafında uzayan palindrom stringler aranır.
        for (let j of [i, i + 1])
            //Daha sonra, bir for döngüsü oluşturulur ve bu döngüde l ve r değişkenleri azaltılarak ve artırarak 
            //stringin tüm karakterlerine ulaşılır. Eğer l ve r indexleri arasında oluşan string palindrom ise, l ve r
            // değişkenleri azaltılır ve artırılır. Bu işlem, l ve r indexleri arasında oluşan string palindrom olana kadar devam eder.
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
                //Bulunan palindrom stringin uzunluğu, en uzun palindrom stringin uzunluğundan daha uzun ise, li ve ri değişkenlerine bulunan 
                //palindrom stringin ilk ve son karakterlerinin indexleri atanır. Aksi takdirde, li ve ri değişkenleri değiştirilmez.
                [li, ri] = (r - l + 1) > (ri - li + 1) ? [l, r] : [li, ri];
    //For ve while döngüleri tamamlandıktan sonra, en uzun palindrom string olarak li ve ri indexleri arasında oluşan string döndürülür.
    return s.substring(li, ri + 1);
}