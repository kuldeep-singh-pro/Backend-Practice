function sumArray(arr){

  let sum = 0;

  for(let item of arr){

    if(Array.isArray(item)){
      sum += sumArray(item);
    } else {
      sum += item;
    }

  }

  return sum;
}

console.log(sumArray([1, [2, [3, 4]], 5]))