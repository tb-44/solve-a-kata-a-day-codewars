
import java.util.LinkedList;
import java.util.List;

public class PancakeSorting {
    public List<Integer> pancakeSort(int[] A) {
        int max = A.length;
        List<Integer> result = new LinkedList<>();

        for (int i = max; i >= 0; i--) {
            findAndFlip(A, i, i - 1, result);
        }
        return result;
    }

    private void findAndFlip(int[] A, int target, int targetIndex, List<Integer> result) {
        int indexFlip = -1;
        for (int i = 0; i <= targetIndex; i++) {
            if (A[i] == target) {
                indexFlip = i;
                break;
            }
        }

        if (indexFlip == targetIndex) {
            return;
        }

        if (indexFlip != 0) {
            result.add(indexFlip + 1);
        }
        flip(A, indexFlip);
        result.add(targetIndex + 1);
        flip(A, targetIndex);
    }

    private void flip(int[] A, int index) {
        int mid = index >> 1;
        for (int i = 0; i <= mid; i++) {
            int temp = A[i];
            A[i] = A[index - i];
            A[index - i] = temp;
        }
    }
}