var subsets = function(nums) {
    let res = []

    function dfs(i, path) {
        if (i === nums.length) {
            res.push([...path])
            return
        }

        path.push(nums[i])
        dfs(i + 1, path)
        path.pop()

        dfs(i + 1, path)
    }

    dfs(0, [])
    return res
}