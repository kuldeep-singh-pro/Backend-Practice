function addBinary(a, b) {
    let res = "", carry = 0;
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += +a[i--];
        if (j >= 0) sum += +b[j--];

        res = (sum % 2) + res;
        carry = sum > 1 ? 1 : 0;
    }

    return res;
}