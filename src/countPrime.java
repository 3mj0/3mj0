public class countPrime {
    public static void main(String[] args) {
        int count = 0;

        System.out.println("Prime numbers between 1 and 50: ");

        for (int a = 2; a <= 50; a++) {
            boolean isPrime = true;

            for (int b = 2; b <= Math.sqrt(a); b++) {
                if (a % b == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                count++;
                System.out.print(a + " ");
            }
        }
        System.out.println("\nTotal prime numbers between 1 and 50: " + count);

    }
}