import java.util.Scanner;

public class fromElias {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Count to Ten:");
        System.out.println("----------------------------------------");
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");
        System.out.println("Even Numbers Only");

        int num = 2; // Start with the first even number
        while (num <= 20) { // Loop until 20
            System.out.println(num);
            num += 2; // Increment by 2 to get the next even number
        }

        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");
        System.out.println("Simple Countdown;");
        for (int i = 5; i >= 1; i--) {
            System.out.println(i);
        }
        System.out.println("Blast off!");
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");


        System.out.println("Sum of First Ten Numbers");
        int sum = 0; // Initialize sum variable to store the sum
        num = 1; // reassign num
        while (num <= 10) { // Loop until num reaches 10
            sum += num; // Add num to sum
            num++; // Increment num to move to the next integer
        }

        System.out.println("Sum of the first ten positive integers: " + sum);
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println("Multiplication Table");
        System.out.println("----------------------------------------");
        System.out.println("Enter the number you want to get a multiplier: ");

        int multiplier = in.nextInt(); // Define the multiplier
        System.out.println("Multiplication table for " + multiplier + ":");

        for (int i = 1; i <= 12; i++) {
            int result = i * multiplier;
            System.out.println(i + " * " + multiplier + " = " + result);
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");
        System.out.println("Odd Numbers Less than 20");
        num = 1; // reassign num value

        while (num < 20) { // Loop until less than 20
            System.out.println(num);
            num += 2; // Increment by 2 to get the next odd number
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println("Simple Interest Calculator");
        double principal = 1000; // Principal amount
        double rate = 0.05; // Rate of interest (5% expressed as a decimal)

        System.out.println("Principal amount: $" + principal);
        System.out.println("Rate of interest: " + (rate * 100) + "%");

        for (int year = 1; year <= 5; year++) {
            double interest = principal * rate * year; // Simple interest formula
            double amount = principal + interest; // Total amount after interest
            System.out.println("Year " + year + ": Simple Interest = $" + interest + ", Total Amount = $" + amount);
        }

        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println("Factorial Calculator");

        int n = 5; // The number for which factorial is to be calculated
        int factorial = 1; // Initialize factorial to 1

        int i = 1; // Start with 1

        while (i <= n) { // Loop until i reaches n
            factorial *= i; // Multiply factorial by i
            i++; // Increment i
        }

        System.out.println("Factorial of " + n + " is: " + factorial);

        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println("Print Characters: ");
        String str = "Hello";

        for (int a = 0; a < str.length(); a++) {
            System.out.println(str.charAt(a));
        }

        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Leap Year: ");
        System.out.println("----------------------------------------");

        for (int year = 2000; year <= 2020; year++) {
            // Check if the year is a leap year
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                System.out.println(year);
            }
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Guess the Number: ");
        System.out.println("----------------------------------------");
        int secretNumber = 7; // The correct number to guess
        int guess;

        System.out.println("Welcome to Guess the Number Game!");
        System.out.println("Try to guess the secret number between 1 and 10.");

        // Loop until the user guesses the correct number
        while (true) {
            System.out.print("Enter your guess: ");
            guess = in.nextInt();

            if (guess == secretNumber) {
                System.out.println("Congratulations! You guessed the correct number: " + secretNumber);
                break; // Exit the loop if the guess is correct
            } else if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Too high! Try again.");
            }
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Count Prime Numbers ");
        System.out.println("----------------------------------------");

        int count = 0;

        System.out.println("Prime numbers between 1 and 50:");

        // Loop through numbers from 2 to 50
        for (int x = 2; x <= 50; x++) {
            boolean isPrime = true;

            // Check if the number is prime
            for (int y = 2; y <= Math.sqrt(i); y++) {
                if (x % y == 0) {
                    isPrime = false;
                    break;
                }
            }

            // If the number is prime, increment count and print it
            if (isPrime) {
                count++;
                System.out.print(x + " ");
            }
        }

        System.out.println("\nTotal prime numbers between 1 and 50: " + count);

        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Fibonacci Sequence ");
        System.out.println("----------------------------------------");

        int FS_n = 10; // Number of Fibonacci numbers to print
        int FS_first = 0;
        int FS_second = 1;
        int FS_count = 0;

        System.out.println("First " + FS_n + " numbers of the Fibonacci sequence:");

        // Printing the first two Fibonacci numbers
        System.out.print(FS_first + " ");
        System.out.print(FS_second + " ");
        FS_count += 2;

        // Printing the rest of the Fibonacci numbers using a while loop
        while (FS_count < FS_n) {
            int FS_next = FS_first + FS_second;
            System.out.print(FS_next + " ");

            // Updating variables for the next iteration
            FS_first = FS_second;
            FS_second = FS_next;
            FS_count++;
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Power of 2 ");
        System.out.println("----------------------------------------");
        System.out.println("Powers of 2 from 2^1 to 2^10:");


        // Loop to calculate and print powers of 2
        for (int exponent = 1; exponent <= 10; exponent++) {
            int power = 1;
            for (int e = 1; e <= exponent; e++) {
                power *= 2;
            }
            System.out.println("2^" + exponent + " = " + power);
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Number of Triangle ");
        System.out.println("----------------------------------------");
        // Outer loop for the number of lines
        for (int t = 1; t <= 5; t++) {
            // Inner loop for printing numbers on each line
            for (int r = 1; r <= t; r++) {
                System.out.print(r);
            }
            System.out.println(); // Move to the next line after each inner loop iteration
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" Square of Asterisks ");
        System.out.println("----------------------------------------");

        // Outer loop for rows
        for (int v = 1; v <= 5; v++) {
            // Inner loop for columns
            for (int b = 1; b <= 5; b++) {
                System.out.print("*");
            }
            System.out.println(); // Move to the next line after printing each row
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");

        System.out.println(" While loop Countdown with Condition");
        System.out.println("----------------------------------------");

        int cd_number = 10;

        // While loop to countdown from 10 to 1
        while (cd_number >= 1) {
            // Check if the number is not 5 before printing
            if (cd_number != 5) {
                System.out.println(cd_number);
            }
            cd_number--; // Decrement the number
        }
        System.out.println("----------------------------------------");
        System.out.println("----------------------------------------");
    }
}