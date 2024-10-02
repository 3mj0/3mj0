import java.util.Scanner;

public class guessNumber {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int secretNumber = 7;
        int guess;

        System.out.println("Welcome to Guess the Number Game!");
        System.out.println("Try to guess the secret number between 1 and 10.");

        while (true) {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess == secretNumber) {
                System.out.println("Congratulations! You guessed the correct number: " + secretNumber);
                break;
            } else if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Too high! Try again.");
            }
        }
    }
}
