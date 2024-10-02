public class maxElement {
    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
        int max = findMax(matrix);
        System.out.println("The maximun element is: " + max);
    }

    public static int findMax(int[][] matrix) {
        int max = Integer.MIN_VALUE;

        for (int[] row : matrix) {
            for (int num : row) {
                if (num > max) {
                    max = num;
                }
            }
        }
        return max;
    }
}