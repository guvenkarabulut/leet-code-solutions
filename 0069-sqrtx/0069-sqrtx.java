class Solution {
    public int mySqrt(int x) {
        if (x==0) {
            return 0;
        }
        double guess = x;
        double error = 1e-15;
        while (Math.abs(guess - x / guess) > error * guess) {
            guess = (guess + x / guess) / 2.0;
        }
        return (int) guess;
    }
}