let s = "aabb";
let t = "aabbb";

let freq = {};

for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
}

for (let i = 0; i < t.length; i++) {
    if (!freq[t[i]]) {
        console.log("the different char is:", t[i]);
        break;
    }
    freq[t[i]]--;
}



// var findTheDifference = function(s, t) {
//     let freq = {};

//     for (let i = 0; i < s.length; i++) {
//         freq[s[i]] = (freq[s[i]] || 0) + 1;
//     }

//     for (let i = 0; i < t.length; i++) {
//         if (!freq[t[i]]) {
//             return t[i];
//         }
//         freq[t[i]]--;
//     }
// };