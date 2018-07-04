// You are given an array (which will have a length of at least 3, 
//but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely 
//comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

import java.util.Arrays;

public class FindOutlier {
    
	static int find(int[] integers) {
		int out = 0;

		int[] even = Arrays.stream(integers).filter(x -> (x & 1) == 0).toArray();
		if (even.length==1) out = even[0]; 

		int[] odd = Arrays.stream(integers).filter(x -> (x & 1) != 0).toArray();
		if (odd.length==1) out = odd[0];

		return out;
	}
}