public class elementExist {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int target = 5;
        boolean exists = elementExists(matrix, target);

        if (exists) {
            System.out.println("Element " + target + " exists in the matrix!");
        } else {
            System.out.println("Element " + target + " does not exist in the matrix!");
        }
    }
    public static boolean elementExists(int[][] matrix, int target) {
        for (int[] row : matrix){
            for (int num : row){
                if (num == target){
                    return true;
                }
            }
        }
        return false;
    }
}