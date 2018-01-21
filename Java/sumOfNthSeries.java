// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

//solution
public class NthSeries {
	public static String seriesSum(int n) {
		float result = 1.0f;
		float baseNum = 1.0f;
		if (n <= 0) result = 0;
		else {
			for (int i = 1; i < n; i++) {
				baseNum = baseNum + 3;
				result += 1.0 / baseNum;
			}
		}
		return String.format("%.2f", result);
	}
}

//others
public class NthSeries {
  
  public static String seriesSum(int n) {
    
    double sum = 0.0;
    for (int i = 0; i < n; i++)
      sum += 1.0 / (1 + 3 * i);
    
    return String.format("%.2f", sum);
    
  }
}

import java.util.stream.IntStream;

public class NthSeries {
  
  public static String seriesSum(int n) {
        return String.format("%.2f", IntStream.range(0, n).mapToDouble(num -> 1.0 / (1 + num * 3)).sum());
    }
}