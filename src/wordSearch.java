public class wordSearch {
    public static void main(String[] args) {
        char[][] grid = {
                {'A', 'B', 'C', 'E'},
                {'S', 'F', 'C', 'S'},
                {'A', 'D', 'E', 'E'}
        };

        String word1 = "ABC";
        String word2 = "SCF";
        String word3 = "ABCB";

        System.out.println("Grid:");
        printGrid(grid);

        System.out.println("\nWord: " + word1 + ", Exists: " + exist(grid, word1));
        System.out.println("Word: " + word2 + ", Exists: " + exist(grid, word2));
        System.out.println("Word: " + word3 + ", Exists: " + exist(grid, word3));
    }

    public static boolean exist(char[][] grid, String word) {
        if (grid == null || grid.length == 0 || grid[0].length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int rows = grid.length;
        int cols = grid[0].length;

        // Check horizontally
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= cols - word.length(); j++) {
                if (checkHorizontal(grid, i, j, word)) {
                    return true;
                }
            }
        }

        // Check vertically
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i <= rows - word.length(); i++) {
                if (checkVertical(grid, i, j, word)) {
                    return true;
                }
            }
        }

        return false;
    }

    private static boolean checkHorizontal(char[][] grid, int row, int col, String word) {
        int length = word.length();
        for (int k = 0; k < length; k++) {
            if (grid[row][col + k] != word.charAt(k)) {
                return false;
            }
        }
        return true;
    }

    private static boolean checkVertical(char[][] grid, int row, int col, String word) {
        int length = word.length();
        for (int k = 0; k < length; k++) {
            if (grid[row + k][col] != word.charAt(k)) {
                return false;
            }
        }
        return true;
    }

    public static void printGrid(char[][] grid) {
        for (char[] row : grid) {
            for (char c : row) {
                System.out.print(c + " ");
            }
            System.out.println();
        }
    }
}
