// var missingNumber = function(nums) {

//     for(let i = 0; i <= nums.length; i++){

//         if(!nums.includes(i)){
//             return i;
//         }
//     }
// };



function missingNumber(nums) {

    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }

    return result;
}


// Test Cases
let nums1 = [3, 0, 1];
let nums2 = [0, 1];
let nums3 = [9,6,4,2,3,5,7,0,1];

console.log("Missing number:", missingNumber(nums1));
console.log("Missing number:", missingNumber(nums2));
console.log("Missing number:", missingNumber(nums3));