public class elementBoundaries {
    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12},
                {13, 14, 15, 16}
        };

        System.out.println("Original Matrix:");
        printMatrix(matrix);

        System.out.println("\nBoundary Elements:");
        printBoundaryElements(matrix);
    }

    public static void printBoundaryElements(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        if (rows == 0 || cols == 0) {
            return;
        }

        for (int i = 0; i < rows; i++) {
            if (i == 0 || i == rows - 1) {
                for (int j = 0; j < cols; j++) {
                    System.out.print(matrix[i][j] + " ");
                }
            } else {
                System.out.print(matrix[i][0] + " ");
                System.out.print(matrix[i][cols - 1] + " ");
            }
        }
    }

    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
