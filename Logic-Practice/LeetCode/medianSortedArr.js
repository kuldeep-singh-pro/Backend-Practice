var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);

    let n = arr.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    }

    return arr[mid];
};