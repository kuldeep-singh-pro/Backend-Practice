let a = "aba";
let b = "cdc";

let count;

if (a === b) {
    count = -1;
} else {
    count = Math.max(a.length, b.length);
}

console.log("longest uncommon subsequence count is :", count);