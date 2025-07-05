/** Filter Elements from Array */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = function(arr,fn){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       if(fn(arr[i],i)) {
           result.push(arr[i]);
       }
    }
    return result;
}

function funcAsCallback(number,index){
    return number > 10
}
function plusFirstIndex(number){
    return number + 1
}
function firstIndex(n,i){
    return i === 0
}


console.log("plusFirstIndex==>",filter([10,30,40],plusFirstIndex))
console.log("funcAsCallback==>",filter([10,30,40],funcAsCallback))
console.log("firstIndex==>",filter([10,30,40],firstIndex))
