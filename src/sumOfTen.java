public class sumOfTen {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;

        while (i <= 10) {
            sum += i;
            i++;
        }

        System.out.println("Sum of the first ten positive integers: " + sum);
    }
}