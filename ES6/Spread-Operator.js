// Spread Operator can be used when all elements from an object
// or array need to be included in a list of some kind. 

const sum = (...nums) => { // used rest operator
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers)) // used spread operator

//more examples

// Example 1
const numArray = [1,2,3,4]
const strArray = ['a','b','c']

const combineArray = [...numArray, ...strArray]

console.log(...combineArray) // prints 1 2 3 4 "a" "b" "c"


// Example 2
let obj1 = {
    FirstName : "Hamid",
    LastName : "Ayub"
}

let obj2 = {
    age : 20,
    class : "BESE-9B"
}

let obj = {...obj1, ...obj2}

console.log(obj)