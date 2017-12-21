// You have to create a method "compoundArray" which should take as input two int arrays of different length and 
//return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}

//solution:

public class CompoundArray {

	public static int[] compoundArray(int[] a, int[] b) {
		int[] result = new int[a.length + b.length];

		for (int i = 0; i < a.length; i++) {
			if (i >= b.length) result[b.length + i] = a[i];
			else result[i * 2] = a[i];
		}

		for (int i = 0; i < b.length; i++) {
			if (i + 1 >= a.length) result[a.length + i] = b[i];
			else result[i + i + 1] = b[i];
		}
    
		return result;
	}
};

//other's
public class CompoundArray {
    
    public static int[] compoundArray(int[] a, int[] b){
    int[] output = new int[a.length+b.length];
    int index=0;
    int length = (a.length > b.length) ? a.length : b.length;
    for (int i=0 ; i<length; i++){
        if (i<a.length){output[index]=a[i];
        index++;}
        if (i<b.length) {output[index]=b[i];
        index++;}
    }
        return output;
    }
};

public class CompoundArray {
    
    public static int[] compoundArray(int[] a, int[] b){
        int[] result = new int[a.length + b.length];
        for (int i = 0, j = 0; i < result.length; j++) {
            if (j < a.length) result[i++] = a[j];
            if (j < b.length) result[i++] = b[j];
        }
        return result;
    }
};