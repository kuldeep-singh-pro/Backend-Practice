
var reverseOnlyLetters = function(s) {

    let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    const isLetter = (ch) => {
        let code = ch.charCodeAt(0);
        return (
            (code >= 65 && code <= 90) || 
            (code >= 97 && code <= 122)
        );
    };

    while (left < right) {

        if (!isLetter(arr[left])) {
            left++;
            continue;
        }

        if (!isLetter(arr[right])) {
            right--;
            continue;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
};