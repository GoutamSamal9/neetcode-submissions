class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i: number = 0; i < nums.length; i++) {
            const restValue = target - nums[i];
            const findIndex = nums.findIndex((each, j) => i !== j && each === restValue)
            if (findIndex>=0) {
                return [i, findIndex]
            }
        }
    }
}
