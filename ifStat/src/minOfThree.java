public class minOfThree {
    public static void main(String[] args) {

        int a = 5;
        int b = 10;
        int c = 3;

        int min = findMin(a, b, c);

        System.out.println("Minimum among " + a + ", " + b + ", and " + c + " is: " + min);
    }

    public static int findMin(int a, int b, int c) {

        if (a < b && a < c) {
            return a;
        }

        else if (b < a && b < c) {
            return b;
        }

        else {
            return c;
        }
    }
}

