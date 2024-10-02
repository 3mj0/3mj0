public class multiplicationTable {
        public static void main(String[] args) {

            int multiplier = 7;

            System.out.println("Multiplication table for " + multiplier + ":");

            for (int i = 1; i <= 10; i++) {
                System.out.println(i + " * " + multiplier + " = " + (i * multiplier));
            }
        }
    }