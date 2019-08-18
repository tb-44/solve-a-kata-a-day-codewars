// Your school has hired you to keep track of the score at baseball games. Unfortunately you tend to be rather absent minded because most nights you stay up late playing video games and coding. Let's create a program that will keep track of the score for us.

// We'll need to create a constructor ScoreCard that has two public functions: addEntry and getScore.

// addEntry - Takes in the result of an at-bat. This result can be single, double, triple, homerun, or out.

// getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]

// To keep things simple, base runners will advance the amount of bases equal to that of the batter's hit (i.e. if the batter hits a double, each base-runner will advance two bases).

// A few important baseball rules:

// The Away team bats first.
// There are three outs in an inning.
// After three outs the opposing team hits.
// The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
// Base runners start at home and then cycle through the bases first, second, third and home.
// Runners score for their team after they reach home.
// For more information on baseball visit here: http://en.wikipedia.org/wiki/Baseball

class ScoreCard {
    constructor() {
        this.scores = [0, 0]
        this.turn = 1;
        this.outs = 0;
        this.bases = [0, 0, 0]
    };

    addEntry(entry) {
        if (entry == "single") {
            this.bases.unshift(1);
        }
        else if (entry == "double") {
            this.bases.unshift(0, 1);
        }
        else if (entry == "triple") {
            this.bases.unshift(0, 0, 1);
        }
        else if (entry == "homerun") {
            this.bases.unshift(0, 0, 0, 1);

        }
        if (entry == "out") {
            this.outs++;
            if (this.outs >= 3) {
                this.turn = (this.turn + 1) % 2
                this.bases = [0, 0, 0];
                this.outs = 0;
            }
        } else {
            var score = this.bases.splice(3);

            if (score.length > 0) {
            this.scores[this.turn] += score.reduce((a, b) => a + b);
            }
        }
    }

    getScore() {
        return "Home: " + this.scores[0] + " Away: " + this.scores[1]
    }
}