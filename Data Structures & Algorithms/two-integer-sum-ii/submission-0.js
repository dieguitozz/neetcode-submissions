class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hasher = new Map()

        for(let i = 0; i < numbers.length; i++) {
            let temp = target - numbers[i]
            if(hasher.has(temp)) {
                return[hasher.get(temp), i + 1]
            }
            hasher.set(numbers[i], i + 1)
        }

    return []
    }
}
