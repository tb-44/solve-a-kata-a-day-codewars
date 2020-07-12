public class StyleRankingSystem {
    public static class User {
        int rank = -8;
        int count = 0;

        public void incProgress(int a) {
            if (a < -8 || a > 8 || a == 0)
                throw new IllegalArgumentException();
            if (this.rank < 0 && a > 0)
                a--;
            if (this.rank > 0 && a < 0)
                a++;
            if (this.rank == a)
                this.count += 3;
            if (this.rank - 1 == a)
                this.count += 1;
            if (this.rank - 2 >= a)
                this.count += 0;
            if (this.rank < a) {
                int d = a - this.rank;
                this.count += (10 * d * d);
            }
            while (this.count >= 100 && this.rank < 8) {
                if (++this.rank == 0)
                    this.rank++;
                this.count -= 100;
            }
            if (this.rank == 8)
                this.count = 0;
        }
    }
}