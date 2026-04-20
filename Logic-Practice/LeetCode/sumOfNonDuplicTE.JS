var sumOfUnique = function(nums) {
    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let sum = 0;

    for (let [num, count] of map) {
        if (count === 1) sum += num;
    }

    return sum;
};