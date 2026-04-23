class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if(s.length !== t.length) {
        return false
    }
    let countS = new Map()
    let countT = new Map()
    
    for(let char of s) {
        countS.set(char, (countS.get(char) || 0) + 1)
    }

    for(let char of t) {
        countT.set(char, (countT.get(char) || 0) + 1)
    }

    for(let [char, value] of countT) {
        if(countS.get(char) !== value) {
            return false
        }
    }
    return true
}
}
