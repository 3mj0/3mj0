import java.util.Scanner;

public class taxBracket {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the amount: ");
        double amount = sc.nextDouble();

        if (amount < 10000) {
            System.out.println("The tax bracket is 10%");
        } else if (amount < 20000) {
            System.out.println("The tax bracket is 20%");
        } else {
            System.out.println("The tax bracket is 30%");
        }
        sc.close();
    }
}
