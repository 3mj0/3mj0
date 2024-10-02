public class oddEven {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int[] counts = countOddEven(matrix);
        System.out.println("The number of even numbers is: " + counts[0]);
        System.out.println("The number of odd numbers is: " + counts[1]);
    }
    public static int[] countOddEven(int[][] matrix) {
        int[] count = {0, 0};

        for (int[] row : matrix) {
            for (int num : row) {
                if (num % 2 == 0) {
                    count[0]++;
                } else {
                    count[1]++;
                }
            }
        }
        return count;
    }
}