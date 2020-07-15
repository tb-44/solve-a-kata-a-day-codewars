// Task
// Your task in the kata is to determine how many boats are sunk damaged and
// untouched from a set amount of attacks. You will need to create a function
// that takes two arguments, the playing board and the attacks.

// Example Game
// The board

// X
// Y

// 1
// 2
// 3
// 4
// 5
// 6
// 4
// 0
// 0
// 2
// 2
// 2
// 2
// 0
// 3
// 0
// 0
// 0
// 0
// 0
// 3
// 0
// 1
// 0
// 0
// 0
// 3
// 0
// 1
// 0
// 0
// 3
// 2
// 1

// Boats are placed either horizontally, vertically or diagonally on the board.
// 0 represents a space not occupied by a boat. Digits 1-3 represent boats which
// vary in length 1-4 spaces long. There will always be at least 1 boat up to a
// maximum of 3 in any one game. Boat sizes and board dimentions will vary from
// game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the
// Y. There will be at least one attack per game, and the array will not contain
// duplicates.

// { {2, 1}, {1, 3}, {4, 2} };
// First attack `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack `[4, 2]` = `1`
// Function Initialization
// int[][] board = new int[][] {new int[] {0,0,1,0},
// new int[] {0,0,1,0},
// new int[] {0,0,1,0}};
// int[][] attacks = new int[][] {new int[] {3,1},new int[] {3,2},new int[]
// {3,3}};
// BattleShips.damagedOrSunk(board, attacks);
// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are
// sunk).
// -1 point for each whole boat that was not hit at least once.
// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once
// Output
// You should return a hash with the following data

// Example Game Output
// In our above example..

// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in
// Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash

import java.util.*;

public class BattleShips {
    private static final String SUNK = "sunk";
    private static final String DAMAGED = "damaged";
    private static final String NOT_TOUCHED = "notTouched";
    private static final String POINTS = "points";

    public static Map<String, Double> damagedOrSunk(final int[][] board, final int[][] attacks) {
        Map<Integer, Integer> ships = new HashMap<>();
        Map<Integer, Integer> post = new HashMap<>();
        Map<String, Double> result = new HashMap<>();

        theBoard(board, ships);
        Attacks(board, attacks);
        theBoard(board, post);
        Games(ships, post, result);
        Points(result);

        return result;
    }

    private static void Points(Map<String, Double> result) {
        result.put(SUNK, result.getOrDefault(SUNK, 0.0));
        result.put(DAMAGED, result.getOrDefault(DAMAGED, 0.0));
        result.put(NOT_TOUCHED, result.getOrDefault(NOT_TOUCHED, 0.0));
        result.put(POINTS, (result.getOrDefault(SUNK, 0.0) * 1.0) + (result.getOrDefault(DAMAGED, 0.0) * 0.5)
                + (result.getOrDefault(NOT_TOUCHED, 0.0) * -1.0));
    }

    private static void Games(Map<Integer, Integer> ships, Map<Integer, Integer> post, Map<String, Double> result) {
        ships.forEach((key, valPre) -> {
            Integer valPost = post.getOrDefault(key, 0);
            if (valPre == valPost)
                result.put(NOT_TOUCHED, 1 + result.getOrDefault(NOT_TOUCHED, 0.0));
            else if (valPost > 0)
                result.put(DAMAGED, 1 + result.getOrDefault(DAMAGED, 0.0));
            else if (valPost == 0)
                result.put(SUNK, 1 + result.getOrDefault(SUNK, 0.0));
        });
    }

    private static void Attacks(int[][] board, int[][] attacks) {
        for (int[] att : attacks) {
            board[board.length - att[1]][att[0] - 1] = 0;
        }
    }

    private static void theBoard(int[][] board, Map<Integer, Integer> ships) {
        for (int[] row : board) {
            for (int val : row) {
                if (val > 0)
                    ships.put(val, 1 + ships.getOrDefault(val, 0));
            }
        }
    }
}