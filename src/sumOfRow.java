public class sumOfRow {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        SumOfRows(matrix);
    }
    public static void SumOfRows(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            int rowSum = 0;

            for (int j = 0; j < matrix[i].length; j++) {
                rowSum += matrix[i][j];
            }
            System.out.println("The sum of the elements in the rows are: " + rowSum);
        }
    }
}