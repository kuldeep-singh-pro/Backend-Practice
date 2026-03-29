var maximumProduct = function(nums) {
    
    nums.sort((a,b)=>a-b);

    n = nums.length;


    let postNum = nums[n-1] * nums[n-2] * nums[n-3];

    let negMixNum = nums[0] * nums[1] * nums[n-1];

    return Math.max(postNum,negMixNum);
};