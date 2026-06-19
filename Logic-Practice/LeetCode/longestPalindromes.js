var longestPalindrome = function(s) {
    let start = 0;
    let maxLen = 1;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        let len = right - left - 1;

        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);

        expand(i, i + 1);
    }

    return s.substring(start, start + maxLen);
};