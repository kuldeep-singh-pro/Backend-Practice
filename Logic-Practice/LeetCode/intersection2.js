var intersect = function(nums1, nums2) {

    let map = {};
    let result = [];

    for(let num of nums1){
        map[num] = (map[num] || 0) + 1;
    }

    for(let num of nums2){
        if(map[num] > 0){
            result.push(num);
            map[num]--;
        }
    }

    return result;
};


console.log(intersect([2,3,5,3,5],[3,5,5,3]));