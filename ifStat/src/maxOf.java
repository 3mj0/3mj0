import java.util.Scanner;

public class maxOf {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer (a): ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer (b): ");
        int b = scanner.nextInt();

        int max = (a > b) ? a : b;

        System.out.println("The maximum of " + a + " and " + b + " is: " + max);

        scanner.close();
    }
}
