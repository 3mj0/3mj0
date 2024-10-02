public class factorial {
    public static void main(String[] args) {

        int num = 8 ;
        long fact = 1;

        int i = num;
            while (i > 1){
                fact *= i;
                i--;
            }
        System.out.println("The factorial of " + num + " is " + fact);
        }

    }