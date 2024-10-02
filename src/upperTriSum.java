public class upperTriSum {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int sum = upperTriangleSum(matrix);

        System.out.println("The sum of the upper triangle elements is: " + sum);
    }
    public static int upperTriangleSum(int[][] matrix) {
        int sum = 0;
        int n = matrix.length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }
}