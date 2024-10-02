import java.util.Scanner;

public class trafficFine {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("What is the speed limit? ");
        double speedLimit = input.nextDouble();

        System.out.print("What was your actual speed? ");
        double actualSpeed = input.nextDouble();

        int fine;

        if(actualSpeed <= speedLimit) {
            fine = 0;
        } else if (actualSpeed <= speedLimit + 10) {
            fine = 50;
        } else if (actualSpeed <= speedLimit + 20) {
            fine = 100;
        } else {
            fine = 200;
        }
        System.out.println(fine);
    }
}