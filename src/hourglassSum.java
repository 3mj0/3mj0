public class hourglassSum {
    public static void main(String[] args) {

        int[][] myArr = {
                {-9, -9, -9, 1, 1, 1},
                {0, -9, 0, 4, 3, 2},
                {-9, -9, -9, 1, 2, 3},
                {0, 0, 8, 6, 6, 0},
                {0, 0, 0, -2, 0, 0},
                {0, 0, 1, 2, 4, 0}
        };

        int maxHourglassSum = findMaxHourglassSum(myArr);
        System.out.println("The maximum hourglass sum is: " + maxHourglassSum);
    }

    public static int findMaxHourglassSum(int[][] myArr) {
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i <= myArr.length - 3; i++) {
            for (int j = 0; j <= myArr[0].length - 3; j++) {
                 int currentSum = calculateHourglassSum(myArr, i, j);
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }
        return maxSum;
}

public static int calculateHourglassSum(int[][] myArr, int startRow, int startCol) {
    int sum = 0;

    sum += myArr[startRow][startCol];
    sum += myArr[startRow][startCol + 1];
    sum += myArr[startRow][startCol + 2];

    sum += myArr[startRow + 1][startCol + 1];

    sum += myArr[startRow + 2][startCol];
    sum += myArr[startRow + 2][startCol + 1];
    sum += myArr[startRow + 2][startCol + 2];

    return sum;
}
}