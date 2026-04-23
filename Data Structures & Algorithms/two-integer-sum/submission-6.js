class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let hasher = new Map()

      for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

      if(hasher.has(diff)) {
          return [i, hasher.get(diff)]
      }
      hasher.set(nums[i], i)
      }
    }
}
