class Solution {
    public String maximumOddBinaryNumber(String s) {
      int countOnes = 0;
        for (char c : s.toCharArray()) {
            if (c == '1') {
                countOnes++;
            }
        }
        
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if(countOnes > 1){
                result.append('1');
                countOnes--;
                continue;
            }
            if(i < s.length()-1){
            result.append('0');
            }
            if(i == s.length()-1){
                result.append('1');
            }
        }
        
        return result.toString();
    }
}