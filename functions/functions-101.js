let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(300)

console.log(value)
console.log(otherValue)


// Challenge area
let convertFahrenheitTocelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = convertFahrenheitTocelsius(32)
let tempTwo = convertFahrenheitTocelsius(2)
console.log(tempOne + ' degrees C.')
console.log(tempTwo + ' degrees C.')