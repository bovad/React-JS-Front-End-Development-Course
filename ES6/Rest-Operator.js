// Rest Operator and Spread Operator are used with same operator but due to their use at different places
// they are given different name

//NOTE: Rest operator can only be the last argument

// In this function rest operator is not user.
// When sumArray is called by passing (1,2,3,4,5), 
// 1 is assigned to num1, 2 to num2 and 3 to num3
// But rest are ignored.
const sumArray = (num1, num2, num3) => {
    let sum = 0;
    sum = num1 + num2 + num3;
    console.log(`Sum is ${sum}.`)
}

sumArray(1,2,3,4,5)

// Using Rest Operator
// 1 is assigned to num1, 2 to num2 and rest arguments to nums that's why it is called rest operator
const sumArrayUsingRest = (num1, num2, ...nums) => {
    let sum = num1 + num2;
    for ( let i=0; i<nums.length; i++){
        sum+=nums[i]
    }
    console.log(`Sum is ${sum}.`)
}

sumArrayUsingRest(1,2,3,4,5)

// more examples

// 1 is assigned to num1 and [2, 3, 4, 5] to nums
let [num1, ...nums] = [1,2,3,4,5]
console.log(nums) // prints [2, 3, 4, 5]