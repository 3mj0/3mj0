import java.util.Scanner;

public class simpleCal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.println("Enter first number:");
        double num1 = scanner.nextDouble();

        System.out.println("Enter second number:");
        double num2 = scanner.nextDouble();

        System.out.println("Enter operator (+, -, *, /):");
        char operator = scanner.next().charAt(0);

        double result = 0;


        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero!");
                    System.exit(0);
                }
                break;
            default:
                System.out.println("Invalid operator!");
                System.exit(0);
        }


        System.out.println("Result: " + result);

        scanner.close();
    }
}
