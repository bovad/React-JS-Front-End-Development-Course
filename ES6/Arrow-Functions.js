
function sum(a, b){
    return a+b;
}

// We can write the above function in es6 using arrow operator as shown below

const add = (a,b) => {
    return a+b;
};

console.log(sum(5,2))
console.log(add(5,2))

// more examples

const display = name => console.log(`My name is ${name}`)

display("Hamid Ayub")

const show = () => console.log("It contains no variables")
show()