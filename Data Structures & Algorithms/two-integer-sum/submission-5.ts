class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()
        for (let i: number = 0; i < nums.length; i++) {
            const restValue = target - nums[i];
            if (numsMap.has(restValue)) {
                const findIndex = numsMap.get(restValue)
                return [findIndex, i]
            }
            numsMap.set(nums[i], i)

        }
    }
}
