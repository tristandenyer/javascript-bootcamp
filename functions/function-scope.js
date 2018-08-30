// Global scope (convertFahrenheitTocelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)


let convertFahrenheitTocelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitTocelsius(32)
let tempTwo = convertFahrenheitTocelsius(2)

console.log(tempOne + ' degrees C.')
console.log(tempTwo + ' degrees C.')