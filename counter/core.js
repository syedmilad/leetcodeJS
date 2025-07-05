/** 
 * @param{integer} val
 * @return {increment, decrement, reset}
 */
var createCounter = function(init){
    let present = init;
    return {
        increament: function(){
            present++;
            return present;
        },
        decrement: function(){  
            present--;
            return present
        },
        reset: function(){
            return (present = init) 
        }
    }
}
let counter = createCounter(10);
console.log(counter.increament())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())