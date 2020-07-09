// ##Do you know how to make a spiral? Let's test it!
// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

// Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through N^2 represented as a clockwise spiral.

// Return an empty array if N < 1 or N is not int/number

// Examples:

// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

// 1    2    3    
// 8    9    4    
// 7    6    5
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

// 1   2   3   4   5    
// 16  17  18  19  6    
// 15  24  25  20  7    
// 14  23  22  21  8    
// 13  12  11  10  9

public class ClockwiseSpiral {

	public static int[][] createSpiral(int N) {
		if (N < 1) {
			return new int[0][0];
		}

		int[][] clockSpiral = new int[N][N];

		int num = 1;
		int cw1 = 0;
		int cw2 = N - 1;
		int rev1 = 0;
		int rev2 = N - 1;

		while (num <= N * N) {
			for (int i = cw1; i <= cw2; i++) {
				clockSpiral[rev1][i] = num++;
			}

			for (int j = rev1 + 1; j <= rev2; j++) {
				clockSpiral[j][cw2] = num++;
			}

			for (int i = cw2 - 1; i >= cw1; i--) {
				clockSpiral[rev2][i] = num++;
			}

			for (int j = rev2 - 1; j >= rev1 + 1; j--) {
				clockSpiral[j][cw1] = num++;
			}

			cw1++;
			cw2--;
			rev1++;
			rev2--;
		}

		return clockSpiral;
	}
}