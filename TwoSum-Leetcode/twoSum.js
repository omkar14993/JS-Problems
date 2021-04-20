let nums = [2, 5, 6, 11, 15]
let target = 8;

// Brute force method, o(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            if (target - nums[i] === nums[j])
                return [i, j];
        }
    }
}

// using HashMap in JS, o(n)
function twoSumMap(nums, target) {
    let mapSum = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapSum.has(target - nums[i])) {
            return [mapSum.get(target - nums[i]), i]
        }
        mapSum.set(nums[i], i)
    }
}
