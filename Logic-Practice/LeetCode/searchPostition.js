// let  nums = [1,3,5,6];

// let target = 1;

// let left = 0;

// let right = nums.length-1;


// while(left<right){

// if(nums[left] === target ){

// console.log(nums.indexOf(nums[left]));
//     break;
// }
// else if (target>nums[right]){

//    console.log(nums.indexOf(nums[right]) + 1);
//     break;

// }
// else if(nums[right] === target ){
    
//     console.log(nums.indexOf(nums[right]));
//     break;  
// }
// else{
//     left++;
//     right--;
// }

// }


var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        else if (nums[mid] < target) {
            left = mid + 1;
        }

        else {
            right = mid - 1;
        }
    }

    return left;
};