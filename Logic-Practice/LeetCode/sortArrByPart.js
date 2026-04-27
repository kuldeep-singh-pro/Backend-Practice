var sortArrayByParity = function(nums) {
    let evenPart = [];
    let oddPart = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenPart.push(nums[i]);
        } else {
            oddPart.push(nums[i]);
        }
    }
    
    return evenPart.concat(oddPart);
};