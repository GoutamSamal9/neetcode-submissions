class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for (let i: number = 0; i < nums.length; i++) {
            let getCount = countMap.get(nums[i])??0;
                const increseTheCOunt = getCount+1
                countMap.set(nums[i], increseTheCOunt)
        }
        const sortCountMap = [...countMap.entries()]
            .sort((a, b) => b[1] - a[1]);
        const countKeyList=[]
        for (let [key] of sortCountMap) {
            countKeyList.push(key)
        }
        return countKeyList.slice(0, k)
    }
}
