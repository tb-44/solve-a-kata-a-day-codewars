// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

// Example 1:
// Input: hour = 12, minutes = 30
// Output: 165

// Example 2:
// Input: hour = 3, minutes = 30
// Output: 75

// Example 3:
// Input: hour = 3, minutes = 15
// Output: 7.5

// Constraints:
// 1 <= hour <= 12
// 0 <= minutes <= 59
// Answers within 10^-5 of the actual value will be accepted as correct.

public class AngleBetweenHands {
    public double angleClock(int hour, int minutes) {
        double angle = 0, mins_angle = minutes * 6;
        double hr_angle = hour * 30 + (mins_angle / 360 * 30);
        hr_angle = hr_angle % 360;

        angle = Math.abs(hr_angle - mins_angle);
        angle = Math.min(angle, 360 - angle);
        return angle;
    }

}