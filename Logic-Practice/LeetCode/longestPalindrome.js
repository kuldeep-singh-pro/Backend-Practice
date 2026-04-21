var longestPalindrome = function(s) {
    let charSet = new Set();
    let length = 0;

    for (let char of s) {
        if (charSet.has(char)) {
            length += 2;
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    }

    return charSet.size > 0 ? length + 1 : length;
};