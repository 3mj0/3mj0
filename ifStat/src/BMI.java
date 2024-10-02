import java.util.Scanner;
    public class BMI {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter your weight:");
            double weight = sc.nextDouble();

            System.out.println("Enter your height:");
            double height = sc.nextDouble();

            double bmi = weight / (height * height);

            if(bmi < 18.5){
                System.out.println("Underweight.");
            } else if(bmi < 24.9){
                System.out.println("Normal Weight.");
            } else if(bmi < 29.9){
                System.out.println("Overweight.");
            } else{
                System.out.println("Obese.");
            }
        }
}
