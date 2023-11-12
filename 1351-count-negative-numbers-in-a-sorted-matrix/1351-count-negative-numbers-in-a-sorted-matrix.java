class Solution {
    public int countNegatives(int[][] grid) {
        int count = 0;
        for (int row = 0, col = 0; row < grid.length;) {
            System.out.println(col);
            if(grid[row][col++] < 0){
                count++;
            }
            if (col == grid[row].length) {
                col = 0;
                row++;
            }
        }
        return count;
    }
}