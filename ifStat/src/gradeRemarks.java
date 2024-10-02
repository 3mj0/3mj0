import java.util.Scanner;

public class gradeRemarks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the score (0-100):");
        double score = scanner.nextDouble();

        String grade = calculateGrade(score);
        System.out.println("Grade: " + grade);

        scanner.close();
    }

    public static String calculateGrade(double score) {
        if (score >= 90) {
            return "Excellent";
        } else if (score >= 80) {
            return "Good";
        } else if (score >= 70) {
            return "Ok";
        } else if (score >= 60) {
            return "Needs Work";
        } else {
            return "Fail";
        }
    }
}

