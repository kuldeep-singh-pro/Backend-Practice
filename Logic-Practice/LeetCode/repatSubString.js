var repeatedSubstringPattern = function(s) {

    let n = s.length;

    for (let size = 1; size <= n / 2; size++) {

        if (n % size !== 0) continue;

        let leftHalfValue = "";

        for (let i = 0; i < size; i++) {
            leftHalfValue += s[i];
        }

        let rightHalfValue = leftHalfValue.repeat(n / size);

        if (rightHalfValue === s) {
            return true;
        }
    }

    return false;
};