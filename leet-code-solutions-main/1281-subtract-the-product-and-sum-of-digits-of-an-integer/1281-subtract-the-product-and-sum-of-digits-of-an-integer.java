class Solution {
    public int subtractProductAndSum(int n) {
        int sum=0;
        int multiply=1;
        String num=Integer.toString(n);
        for(int i=0;i<num.length();i++){
            int x=Character.getNumericValue(num.charAt(i)); 
            sum=sum+x;
            multiply=multiply*x;
        }
        return(multiply-sum);
    }
}