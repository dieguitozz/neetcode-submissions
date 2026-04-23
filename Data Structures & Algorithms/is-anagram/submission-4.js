class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length) return false;

      let countT = new Map()
      let countS = new Map()

      for(let char of s) {
        countT.set(char, (countT.get(char) || 0) + 1)
      }

      for(let char of t) {
        countS.set(char, (countS.get(char) || 0) + 1)
      }

      for(let [char, value] of countT) {
        if(countS.get(char) !== value) {
          return false
        }
      }

    return true
}
}
