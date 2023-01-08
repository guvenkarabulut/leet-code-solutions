class Solution {
    public double average(int[] salary) {
        Arrays.sort(salary);
        int sum=0;
        for(int i:salary)
            sum=sum+i;       
        return (double)(sum-salary[0]-salary[salary.length-1])/(salary.length-2);
    }
}