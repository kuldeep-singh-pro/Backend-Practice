let s = "ab-cd";

let arr = s.split(""); 

let left = 0;
let right = arr.length - 1;

while (left < right) {

    if (arr[left].charCodeAt(0) < 33 || arr[left].charCodeAt(0) > 122) {
        left++;
        continue;
    }

    if (arr[right].charCodeAt(0) < 33 || arr[right].charCodeAt(0) > 122) {
        right--;
        continue;
    }


    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
}

console.log(arr.join(""));