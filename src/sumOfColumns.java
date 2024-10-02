public class sumOfColumns {
    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
        sumOfColumns(matrix);
    }

    public static void sumOfColumns(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int[] columnSums = new int[cols];

        for (int col = 0; col < cols; col++) {
            int sum = 0;

            for (int row = 0; row < rows; row++) {
                sum += matrix[row][col];
            }

            columnSums[col] = sum;
        }


        for (int col = 0; col < cols; col++) {
            System.out.println("Sum of elements in column " + (col + 1) + ": " + columnSums[col]);
        }
    }
}
