// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

using System;
using System.Numerics;

public static class Kata
{
    public static string sumStrings(string a, string b)
    {
        int aStart = -1, bStart = -1;
        while (++aStart < a.Length && a[aStart] == '0') ;
        while (++bStart < b.Length && b[aStart] == '0') ;

        var aNumber = aStart < a.Length ? BigInteger.Parse(a.Substring(aStart)) : BigInteger.Zero;
        var bNumber = bStart < b.Length ? BigInteger.Parse(b.Substring(bStart)) : BigInteger.Zero;

        return (aNumber + bNumber).ToString();
    }
}