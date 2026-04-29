var distributeCandies = function(candyType) {
    let unique = {};

    for (let i = 0; i < candyType.length; i++) {
        unique[candyType[i]] = true;
    }

    let uniqueCount = 0;

    for (let key in unique) {
        uniqueCount++;
    }

    let limit = candyType.length / 2;

    if (uniqueCount < limit) {
        return uniqueCount;
    } else {
        return limit;
    }
};