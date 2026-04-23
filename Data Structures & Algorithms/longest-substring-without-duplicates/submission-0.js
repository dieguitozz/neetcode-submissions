class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0
        let hasher = new Map()
        let left = 0

        for(let right = 0; right < s.length; right++) {
            while(hasher.has(s[right])) {
                hasher.delete(s[left])
                left++
            }
            hasher.set(s[right])
            res = Math.max(res, right - left + 1)
        }
        return res

    }
}
