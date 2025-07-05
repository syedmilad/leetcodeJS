/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = new Array(arr.length);
    for(const i in arr){
        res[i] = arr[i]
    }
    return res;
};
console.log(map([1, 2, 3]))