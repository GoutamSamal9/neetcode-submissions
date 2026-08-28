class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupList = new Map<string, string[]>()
        const resultList = []
        for (let i: number = 0; i < strs.length; i++) {
            const sortString = strs[i].split('').sort().join('');
            if (groupList.has(sortString)) {
                const listData: string[] = groupList.get(sortString)
                listData.push(strs[i]);
                groupList.set(sortString, listData)
            } else {
                groupList.set(sortString, [strs[i]]);

            }
        }

        for (let group of groupList.values()) {
            resultList.push(group);
        }

        return resultList;
    }
}
