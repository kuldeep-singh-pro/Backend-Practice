function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });

    let result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
        }
    }

    result.push(current);
    return result;
}