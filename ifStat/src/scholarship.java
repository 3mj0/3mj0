import java.util.Scanner;

public class scholarship {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter your grade: ");
        int grade = sc.nextInt();
        System.out.println("How many extracurricular activities have you participated in? ");
        int activitiesCount = sc.nextInt();

        int minGrade = 85;
        int minActivities = 4;

        if (grade >= minGrade && activitiesCount >= minActivities) {
            System.out.println("CONGRATULATIONS, you ARE eligible for the scholarship!");
        } else {
            System.out.println("Sorry, you are NOT eligible for the scholarship!");
        }

    }
}