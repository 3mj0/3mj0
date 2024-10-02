import java.util.Scanner;

public class posNeg {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int x = scanner.nextInt();


        if (x > 0) {
            System.out.println("It's positive.");
        } else if (x < 0) {
            System.out.println("It's negative.");
        } else {
            System.out.println("It's zero.");
        }

        scanner.close();

    }
}
