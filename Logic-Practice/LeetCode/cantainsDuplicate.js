var containsDuplicate = function(nums) {

    let seen = {};

    for(let num of nums){

        if(seen[num]) return true;

        seen[num] = true;
    }

    return false;
};



var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};