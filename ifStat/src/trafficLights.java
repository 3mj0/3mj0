import java.util.Scanner;

public class trafficLights {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the traffic light color: ");

        String color = sc.nextLine();

        if (color.equals("red")) {
            System.out.println("STOP!");
        } else if (color.equals("yellow")) {
            System.out.println("Slow Down!");
        } else if (color.equals("green")) {
            System.out.println("Go!");
        } else {
            System.out.print("That is not a traffic light color!");
        }
    }
}