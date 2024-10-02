public class oddOnly {
        public static void main(String[] args){

            int number = 1;
            while (number <= 20) {

                if (number % 1 == 0) {

                    System.out.println(number);
                }

                number += 2;
            }
        }
    }