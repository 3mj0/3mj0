import java.util.Scanner;

public class findQuad {
    public static void main(String[] args){
         Scanner sc = new Scanner(System.in);

         System.out.println("Enter x coordinates");
         double x = sc.nextDouble();
         System.out.println("Enter y coordinates");
         double y = sc.nextDouble();

         if(x > 0 && y > 0){
             System.out.println("You are in Quadrant One!");
         } else if (x < 0 && y > 0){
             System.out.println("You are in Quadrant Two!");
         } else if (x < 0 && y < 0){
             System.out.println("You are in Quadrant Three!");
         } else if (x > 0 && y < 0){
             System.out.println("You are in Quadrant Four!");
         } else if (x == 0 && y != 0){
             System.out.println("You are on the Y Axis!");
         } else if (x != 0 && y == 0){
             System.out.println("You are on the X Axis!");
         } else {
             System.out.println("You are at the origin");
         }
    }
}