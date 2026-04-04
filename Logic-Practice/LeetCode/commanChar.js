var commonChars = function(words) {
    let result = [];

    for (let i = 0; i < words[0].length; i++) {
        let ch = words[0][i];
        let found = true;

        for (let j = 1; j < words.length; j++) {
            let index = words[j].indexOf(ch);

            if (index === -1) {
                found = false;
                break;
            }
            words[j] = words[j].slice(0, index) + words[j].slice(index + 1);
        }

        if (found) {
            result.push(ch);
        }
    }

    return result;
};