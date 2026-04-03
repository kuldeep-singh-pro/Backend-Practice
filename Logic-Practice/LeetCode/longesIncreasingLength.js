let nums = [1,3,5,4,7];

let maxLength = 1;
let currentLength = 1;

for(let i = 1; i < nums.length; i++){
    if(nums[i] > nums[i - 1]){
        currentLength++;
    } else {
        currentLength = 1;
    }

    maxLength = Math.max(maxLength, currentLength);
}

console.log("Length of longest continuous increasing subsequence:", maxLength);