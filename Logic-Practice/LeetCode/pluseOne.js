let digit = [9];

let right = digit.length - 1;

while(right >= 0){

    if(digit[right] === 9){
        digit[right] = 0;
        right--;
    }else{
        digit[right] = digit[right] + 1;
        break;
    }
}

if(right < 0){
    digit.unshift(1);
}

console.log("plusone", digit);