public class SumOf {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int sum = sumOfElements(matrix);
        System.out.println("The sum of all elements in the matrix is: " + sum);
    }

    public static int sumOfElements(int[][] matrix) {
        int sum = 0;

        for (int[] row : matrix) {
            for (int num : row) {
                sum += num;
            }
        }
        return sum;
    }
}