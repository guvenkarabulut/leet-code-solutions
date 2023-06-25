class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> myList = new ArrayList<>();
        if (numRows == 0) {
            return myList;
        }
        List<Integer> firstRow = new ArrayList<>();
        firstRow.add(1);
        myList.add(firstRow);
        for (int i = 1; i < numRows; i++) {
            List<Integer> prevRow = myList.get(i - 1);
            List<Integer> row = new ArrayList<>();
            row.add(1);
            for (int j = 1; j < i; j++) {
                int sum = prevRow.get(j - 1) + prevRow.get(j);
                row.add(sum);
            }
            row.add(1);
            myList.add(row);
        }
        return myList;
    }
}