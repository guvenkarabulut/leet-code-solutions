class Solution {
    public String[] findRelativeRanks(int[] score) {
        int n = score.length;
        String[] result = new String[n];
        Map<Integer, Integer> scoreToRank = new HashMap<>();
        int[] sortedScores = Arrays.copyOf(score, n);
        Arrays.sort(sortedScores);

        for (int i = 0; i < n; i++) {
            scoreToRank.put(sortedScores[i], n - i);
        }
        for (int i = 0; i < n; i++) {
            int athleteScore = score[i];
            int rank = scoreToRank.get(athleteScore);

            switch (rank) {
                case 1:
                    result[i] = "Gold Medal";
                    break;
                case 2:
                    result[i] = "Silver Medal";
                    break;
                case 3:
                    result[i] = "Bronze Medal";
                    break;
                default:
                    result[i] = String.valueOf(rank);
                    break;
            }
        }

        return result;
    }
}
