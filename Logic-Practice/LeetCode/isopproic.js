var isIsomorphic = function(s, t) {
    let m1 = {};
    let m2 = {};

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        if ((m1[a] && m1[a] !== b) || (m2[b] && m2[b] !== a)) {
            return false;
        }

        m1[a] = b;
        m2[b] = a;
    }

    return true;
};