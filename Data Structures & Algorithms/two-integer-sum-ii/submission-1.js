class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hasher = new Map()

        for(let i = 0; i < numbers.length; i++) {
            let diff = target - numbers[i]
            if(hasher.has(diff)) {
                return[hasher.get(diff), i + 1]
            }
            hasher.set(numbers[i], i + 1)
        }

    }
}
