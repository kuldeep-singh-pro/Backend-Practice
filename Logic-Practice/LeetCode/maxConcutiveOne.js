let arr = [1,1,3,1,1,1,4,1,1,1,1,1,1]

let currentCount = 0;

let maxCount = 0;

for(let i=0; i<arr.length;i++){

    if(arr[i] === 1){
        currentCount++;
        maxCount = Math.max(maxCount,currentCount)
    }
    else{
        currentCount = 0;
    }
}
console.log("max count of one",maxCount)