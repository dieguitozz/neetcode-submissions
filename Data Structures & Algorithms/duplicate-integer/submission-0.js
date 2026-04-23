class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
 let hasher = new Map()

      for(let num of nums) {
        hasher.set(num, (hasher.get(num) || 0) + 1)

        if(hasher.get(num) > 1) {
            return true
        }
      }
      return false

    }
}
