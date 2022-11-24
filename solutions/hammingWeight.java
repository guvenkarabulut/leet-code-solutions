public class Solution {
    public int hammingWeight(int n) {
        String num=Integer.toBinaryString(n);
        int count=0;
        for(int i=0;i<num.length();i++){
            if(num.charAt(i)=='1')
                count++;
        }
        return count;
    }
}
