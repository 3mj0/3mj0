public class zeroMatrix {
        public static void main(String[] args) {
            int[][] matrix = {
                    {1, 2, 3, 4},
                    {5, 0, 7, 8},
                    {9, 10, 11, 12},
                    {13, 14, 15, 0}
            };

            System.out.println("Original Matrix:");
            printMatrix(matrix);

            setZeroes(matrix);

            System.out.println("\nMatrix with Zeroes Set:");
            printMatrix(matrix);
        }

        public static void setZeroes(int[][] matrix) {
            int rows = matrix.length;
            int cols = matrix[0].length;

            boolean[] zeroRows = new boolean[rows];
            boolean[] zeroCols = new boolean[cols];

            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) {
                    if (matrix[i][j] == 0) {
                        zeroRows[i] = true;
                        zeroCols[j] = true;
                    }
                }
            }

            for (int i = 0; i < rows; i++) {
                if (zeroRows[i]) {
                    for (int j = 0; j < cols; j++) {
                        matrix[i][j] = 0;
                    }
                }
            }

            for (int j = 0; j < cols; j++) {
                if (zeroCols[j]) {
                    for (int i = 0; i < rows; i++) {
                        matrix[i][j] = 0;
                    }
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