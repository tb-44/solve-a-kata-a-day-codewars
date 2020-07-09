// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

public class SortTheOdd {
    public static int[] sortArray(int[] array) {
        int arrLen = array.length;
        int i = 0;
        if (arrLen <= 0)
            return array;

        while (i < arrLen) {
            while (i < arrLen && array[i] % 2 == 0)
                i++;
            int j = i + 1;
            while (j < arrLen) {
                while (j < arrLen && array[j] % 2 == 0)
                    j++;
                if (j < arrLen && array[i] % 2 != 0 && array[j] % 2 != 0 && array[i] > array[j]) {
                    int x = array[i];
                    array[i] = array[j];
                    array[j] = x;
                }
                j++;
            }
            i++;
        }
        return array;
    }
}