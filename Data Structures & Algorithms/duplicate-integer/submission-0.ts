class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    const numberMap = new Map<number, boolean>();

        for (let i: number = 0; i < nums.length; i++) {

            if (numberMap.has(nums[i])) {
                return true
            }
            numberMap.set(nums[i], true)


        }

        return false


    }
}
