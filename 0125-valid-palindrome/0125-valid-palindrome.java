class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^A-Za-z0-9]+", "").toUpperCase();
        if (s.length()==1||s.length()==0){
            return true;
        }
        for (int i = 0; i<s.length();i++){
            if (s.charAt(s.length()-1-i) != s.charAt(i)){
                return false;
            }
        }
        return true;
    }
}