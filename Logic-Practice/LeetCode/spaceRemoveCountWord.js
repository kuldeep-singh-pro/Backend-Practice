let s = "Hello, my name is John";

s = s.toLowerCase();

let count = 0;

for (let i = 0; i < s.length; i++) {

    if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
        count++;
    }

}

console.log("count:", count);