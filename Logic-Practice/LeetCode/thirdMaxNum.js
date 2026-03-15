var thirdMax = function(nums) {

    let arr = [...new Set(nums)];

    arr.sort((a,b) => b - a);

    return arr.length >= 3 ? arr[2] : arr[0];
};

