public class diagonalSum {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int sum = sumDiagonal(matrix);
        System.out.println("The sum of the diagonal elements is: " + sum);
    }
    public static int sumDiagonal(int[][] matrix) {
        int sum = 0;
        int n = matrix.length;

        for (int i = 0; i < n; i++) {
            sum += matrix[i][i];
        }
        return sum;
    }
}
