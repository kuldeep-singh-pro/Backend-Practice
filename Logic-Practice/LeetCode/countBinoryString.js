var countBinarySubstrings = function(str) {
    let lastGroup = 0;
    let currentGroup = 1;
    let total = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentGroup++;
        } else {
            total += Math.min(lastGroup, currentGroup);
            lastGroup = currentGroup;
            currentGroup = 1;
        }
    }

    return total + Math.min(lastGroup, currentGroup);
};