public class numOfIslands {
    public static void main(String[] args) {
        int[][] grid = {
                {1, 1, 0, 0, 0},
                {0, 1, 0, 0, 1},
                {1, 0, 0, 1, 1},
                {0, 0, 0, 0, 0},
                {1, 0, 1, 0, 1}
        };

        int numIslands = countIslands(grid);
        System.out.println("Number of islands: " + numIslands);
    }

    public static int countIslands(int[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        int numIslands = 0;
        int rows = grid.length;
        int cols = grid[0].length;

        // Traverse each cell in the grid
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) { // Found new island
                    numIslands++;
                    // Mark the entire island as visited using DFS
                    dfs(grid, i, j);
                }
            }
        }

        return numIslands;
    }

    private static void dfs(int[][] grid, int row, int col) {
        int rows = grid.length;
        int cols = grid[0].length;

        // Check bounds and if current cell is land
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] != 1) {
            return;
        }

        // Mark current cell as visited
        grid[row][col] = -1; // Any non-zero value except 1 would work

        // Explore all 4 directions
        dfs(grid, row - 1, col); // Up
        dfs(grid, row + 1, col); // Down
        dfs(grid, row, col - 1); // Left
        dfs(grid, row, col + 1); // Right
    }
}
