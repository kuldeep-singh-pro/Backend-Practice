var findLHS = function(nums) {
    let map = new Map()
    
    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    
    let max = 0
    
    for (let [n, count] of map) {
        if (map.has(n + 1)) {
            max = Math.max(max, count + map.get(n + 1))
        }
    }
    
    return max
};