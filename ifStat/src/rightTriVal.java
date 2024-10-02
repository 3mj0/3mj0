import java.util.Scanner;

public class rightTriVal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the lengths of the three sides of the triangle:");
        System.out.println("Side a: ");
        int a = scanner.nextInt();
        System.out.println("Side b: ");
        int b = scanner.nextInt();
        System.out.println("Side c: ");
        int c = scanner.nextInt();

        boolean isRightTriangle = isRightTriangle(a, b, c);

        if (isRightTriangle) {
            System.out.println("That IS a right triangle.");
        } else {
            System.out.println("That IS NOT a right triangle.");
        }

        scanner.close();
    }

    public static boolean isRightTriangle(int a, int b, int c) {

        int longestSide = Math.max(Math.max(a, b), c);


        return longestSide * longestSide == (a * a + b * b + c * c - longestSide * longestSide);
    }
}
