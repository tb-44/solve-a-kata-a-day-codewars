// Your friend is typing his name into a keyboard.  
//Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.  
//Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

public class LongPressName {
    public boolean isLongPressedName(String name, String typed) {
        int diff = 0;
        for (int i = 0; i < typed.length();) {

            if (diff <= i && i - diff < name.length() && typed.charAt(i) == name.charAt(i - diff)) {
                i++;
            }

            else if (diff < i && i - diff - 1 < name.length() && typed.charAt(i) == name.charAt(i - diff - 1)) {
                diff++;
            } else
                return false;
        }

        return typed.length() - diff == name.length();
    }
}