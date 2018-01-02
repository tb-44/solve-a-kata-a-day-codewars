// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

// Note that the principal is not taxed but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

//solutions
public class Money {
	public static int calculateYears(double principal, double interest, double tax, double desired) {
		int y = 0;
		while (principal < desired) {
			double gain = principal * interest;
			double taxes = gain * tax;
			principal += gain - taxes;
			y++;
		}
		return y;
	}
}

//others
public class Money {
  public static int calculateYears(double principal, double interest,  double tax, double desired) {            
    return (int) Math.ceil(Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)));
  }
}

public class Money {
  public static int calculateYears(double principal, double interest, double tax, double desired) {
    double currentAmount = principal;
    int years = 0;

    while (currentAmount < desired) {
      currentAmount = currentAmount + interestPostTaxes(currentAmount, interest, tax);
      years++;
    }
    return years;
  }

  private static double applyTax(double value, double tax) {
    return value*(1-tax);
  }

  private static double interestPostTaxes(double value, double interest, double tax) {
    return applyTax(value*(interest), tax);
  }
}