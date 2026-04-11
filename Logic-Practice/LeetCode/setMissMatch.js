var findErrorNums = function(nums) {
    let n = nums.length;
    let sum = 0, actualSum = 0;
    let set = new Set();
    let duplicate = 0;
    
    for (let num of nums) {
        actualSum += num;
        if (set.has(num)) duplicate = num;
        set.add(num);
    }
    
    sum = n * (n + 1) / 2;
    let missing = sum - (actualSum - duplicate);
    
    return [duplicate, missing];
};