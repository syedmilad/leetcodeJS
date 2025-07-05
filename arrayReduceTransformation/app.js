/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    let initialVal = init;
    for (let i = 0; i < nums.length; i++) {
        console.log("value==>",fn(initialVal, nums[i]))
       initialVal =  fn(initialVal, nums[i])
    }
    return initialVal;
};

function fn(initialVal, num){
    return initialVal + num;
}

const number = [1,2,3,4]
const functionRef = fn;
const initVal = 100;

const customReduce = reduce(number,functionRef,initVal);
console.log(customReduce);