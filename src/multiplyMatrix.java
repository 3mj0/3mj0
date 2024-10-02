public class multiplyMatrix {
        public static void main(String[] args) {
            int[][] A = {
                    {1, 2, 3},
                    {4, 5, 6}
            };

            int[][] B = {
                    {7, 8},
                    {9, 10},
                    {11, 12}
            };

            int[][] C = multiplyMatrices(A, B);

            // Display matrices A, B, and their product C
            System.out.println("Matrix A:");
            printMatrix(A);

            System.out.println("\nMatrix B:");
            printMatrix(B);

            System.out.println("\nProduct of A and B (Matrix C):");
            printMatrix(C);
        }

        public static int[][] multiplyMatrices(int[][] A, int[][] B) {
            int rowsA = A.length;
            int colsA = A[0].length;
            int colsB = B[0].length;

            int[][] C = new int[rowsA][colsB];

            for (int i = 0; i < rowsA; i++) {
                for (int j = 0; j < colsB; j++) {
                    int sum = 0;
                    for (int k = 0; k < colsA; k++) {
                        sum += A[i][k] * B[k][j];
                    }
                    C[i][j] = sum;
                }
            }

            return C;
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