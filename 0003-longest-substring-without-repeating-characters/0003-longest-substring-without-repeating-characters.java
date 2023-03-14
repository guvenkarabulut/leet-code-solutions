class Solution {
public int lengthOfLongestSubstring(String s) {
    int max = 0;
    for (int i = 0; i < s.length(); i++) {
        for (int j = i; j < s.length(); j++) {
            String sub = s.substring(i, j);
            if (sub.indexOf(s.charAt(j)) == -1) {
                max = Math.max(max, sub.length() + 1);
            } else {
                break;
            }
        }
    }
    if (s.length() == 0) max = 0;
    if (s.length() == 1) max = 1;
    return max;
}

}