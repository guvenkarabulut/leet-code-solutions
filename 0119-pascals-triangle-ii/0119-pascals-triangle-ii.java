class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> list = new ArrayList<>();
        if (rowIndex < 0) {
            return list;
        }
        list.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            int curr = (int) ((long) list.get(i - 1) * (rowIndex - i + 1) / i);
            list.add(curr);
        }
        return list;
    }
}