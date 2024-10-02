import java.util.Scanner;

public class password {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your password: ");

        int password = sc.nextInt();

        if (password > 1000 && password < 9999) {
            System.out.println("Your password is valid!");
        } else {
            System.out.println("Your password is invalid!");
        }
    }
}