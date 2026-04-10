let arr = [20, 30, 50, 70, 400, 543, 34];

let max = arr[0];
let secondMax = 0;

let result = -1

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
        secondMax = arr[i];
    }
    else if(secondMax * 2 < max){
        return  result =  arr.indexOf(max)
    }

}




console.log(secondMax); 
console.log(max);       
