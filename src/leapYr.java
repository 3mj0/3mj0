public class leapYr {
    public static void main(String[] args) {

        System.out.println("The leap years between 2000 and 2020 are: ");

        for (int year = 2000; year <= 2020; year++) {
            if (isLeapYear(year)) {
                System.out.println(year);
            }
        }
    }

    public static boolean isLeapYear(int year) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                return year % 400 == 0;
            } else {
                return true;
            }
        }
        return false;

    }
}