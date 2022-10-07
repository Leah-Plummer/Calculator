/*  Build a calculator which can:
    1. Add
    2. Subtract
    3. Divide
    4. Multiply
    5. Square */

    //Add function, sums two numbers input as parameters
const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let result = add(17, 9)
console.log(result)

    //Subtract function, subtracts first parameter from second parameter
const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference
}
result = subtract(39, 2)
console.log(result)

    //Divide function, divides the first parameter by the second parameter
const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber
    return quotient
}
result = divide(18, 3)
console.log(result)

    //Multiply function, multiplies the first parameter by the second parameter
const multiply = (firstNumber, secondNumber) => {
    let product = firstNumber * secondNumber
    return product
}
result = multiply(3, 9)
console.log(result)

    //Square function, squares the parameter input to the function
const square = (number) => {
    const squared = number * number
    return squared
}
result = square(12)
console.log(result)

let totalAnimals = 0
const totalLegs = 60
let twoLeggedAnimals = 0
let fourLeggedAnimals = 0

totalAnimals = multiply(totalLegs, divide(4, 10))

console.log (totalAnimals)
result = divide(60, 2.5)
console.log(result)
