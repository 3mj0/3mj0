import java.util.Scanner;

public class movieRating {
    public static void main(String[] args){

       Scanner sc = new Scanner(System.in);
       System.out.println("Please enter your age!");
       int age = sc.nextInt();

       if(age >= 18){
           System.out.println("You are old enough to watch R rated movies!");
       } else if (age >= 13 && age <= 17){
           System.out.println("You are allowed to watch PG-13, or G rated movies");
       } else if (age < 12){
           System.out.println("You are  allowed to watch G rated movies");
       }
    }
}
