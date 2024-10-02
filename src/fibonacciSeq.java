public class fibonacciSeq {
    public static void main(String[] args) {
        int n = 20;
        int f1 = 0;
        int f2 = 1;
        int fRes = 0;

        System.out.println("First " + n + " numbers of the Fibonacci sequence:");


        System.out.print(f1 + " ");
        System.out.print(f2 + " ");
        fRes += 2;


        while (fRes < n) {
            int FS_next = f1 + f2;
            System.out.print(FS_next + " ");


            f1 = f2;
            f2 = FS_next;
            fRes++;
        }
    }
}
