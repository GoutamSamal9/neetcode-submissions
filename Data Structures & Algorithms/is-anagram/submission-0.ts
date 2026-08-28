class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedTextS: string = s.split('').sort().join('');
        const sortedTextT: string = t.split('').sort().join('');
        return sortedTextS===sortedTextT
    }
}
