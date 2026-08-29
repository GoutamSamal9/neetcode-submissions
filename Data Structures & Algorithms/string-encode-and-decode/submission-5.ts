class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let result = "";
        for (const s of strs) {
            result += s.length + "#" + s;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length) {
            const hashIndex = str.indexOf("#", i);
            let wordLength = Number(str.slice(i, hashIndex))
            const wordStart = hashIndex + 1;
            const word = str.slice(wordStart, wordStart + wordLength);
            result.push(word);
            i = wordStart + wordLength
        }
        return result;
    }
}
