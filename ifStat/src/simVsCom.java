import java.util.Scanner;

public class simVsCom {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter principal amount:");
        double principal = sc.nextDouble();

        System.out.println("Enter rate of interest: ");
        double rate = sc.nextDouble();

        System.out.println("Enter the amount of years accumulated: ");
        int time = sc.nextInt();

        double simpInterest = principal * rate * time / 100;
        double compInterest = principal * Math.pow(1 + rate / 100, time) - principal;

        if(simpInterest > compInterest){
            System.out.println("Simple interest is the better way to go!");
        } else {
            System.out.println("Compound Interest is the best way to go!");
        }
        System.out.println("Simple Interest: " + simpInterest);
        System.out.printf("Compound Interest: %.2f\n", + compInterest);
    }
}
