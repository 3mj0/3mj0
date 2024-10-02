import java.util.Scanner;

public class disCal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter the purchase amount:");
        double cost = scanner.nextDouble();

        double finalPrice = calculateFinalPrice(cost);

        System.out.println("Final price after discount: $" + finalPrice);

        scanner.close();
    }

    public static double calculateFinalPrice(double cost) {
        double finalPrice;

        if (cost <= 100) {
            finalPrice = cost;
        } else if (cost <= 500) {
            finalPrice = cost * 0.9;
        } else {
            finalPrice = cost * 0.8;
        }

        return finalPrice;
    }
}
