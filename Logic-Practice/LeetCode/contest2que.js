
var uniformArray = function(nums1) {

    let ravolqedin = nums1;


    if (nums1.length === 1) {
        return true;
    }

    let minVal = Math.min(...nums1);

  
    if (minVal % 2 === 1) {
        return true;
    }

    for (let num of nums1) {
        if (num % 2 === 1) {
            return false;
        }
    }

    return true;
};