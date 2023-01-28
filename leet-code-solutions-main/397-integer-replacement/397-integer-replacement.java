class Solution {
    public int integerReplacement(int n) {
        int count=0;
        if (n == 2147483647) {
	    n = 1073741824;
	    count = 2;
        }
        while(n != 1){
           if(n==3 || n%2==1 && (n-1)%4 == 0)
                n-=1;
            else if(n%2==1)
                n+=1;
            else
                n/=2;
            count++;
        }            
        return count;
    }
}