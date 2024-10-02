public class interestCalculator {
        public static void main(String[] args) {

            double principal = 1000;
            double rate = 1.05;


            for (int year = 1; year <= 5; year++) {
                principal = principal * rate;

                System.out.printf("Simple interest for year %d: %.2f%n", year, principal);
            }
        }
    }