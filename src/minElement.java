public class minElement {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int min = findMin(matrix);
        System.out.println("The minimun element is: " + min);
    }
    public static int findMin(int[][] matrix) {
        int min = Integer.MAX_VALUE;
        for (int[] row : matrix){
            for (int num : row){
                if (num < min){
                    min = num;
                }
            }
        }
        return min;
    }
}
