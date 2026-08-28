class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const frequencyMap = new Map<string, number>();

        for (const char of s) {
                frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
        }

        for (const char of t) {
            if ((frequencyMap.get(char) || 0) <= 0) {
                return false;
            }
            frequencyMap.set(char, frequencyMap.get(char)! - 1)
        }

        return true

    }
}
