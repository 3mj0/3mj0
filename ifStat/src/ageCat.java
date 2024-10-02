import java.util.Scanner;

public class ageCat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Please, enter your age.");
        int age = sc.nextInt();

        String ageGroup = classifyAge(age);

        System.out.println("Your age group is: " + ageGroup);

        sc.close();
    }

    public static String classifyAge(int age) {
        if (age >= 0 && age <= 12) {
            return "child!";
        } else if (age >= 13 && age <= 19) {
            return "Teen!";
        } else if (age >= 20 && age <= 65) {
            return "Adult!";
        } else {
            return "Senior!";
        }


    }

}
