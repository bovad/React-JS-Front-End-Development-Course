// Example 1
let name = "Hamid Ayub age is 20"
var nameSplit = name.split(' ');

let [firstName, lastName,,,age] = nameSplit //by leaving empty commas we can select only those which we want
console.log(`${firstName} ${lastName} ${age}`) // prints Hamid Ayub 20

// Example 2
var person = {
    fName : "Hamid",
    lName : "Ayub",
    myAge : 20
}

let {myAge} = person // this is not iterable so you have to reference it by name not like [,,myAge]
console.log(`My age is ${myAge}`)

// Example 3
let job = "student"
let salary = 30000

let Income = {
    job : job,
    salary : salary
}
console.log(Income)

// The above code can be also written as

let Inc = {
    job,
    salary
}
console.log(Inc)