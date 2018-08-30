// var is function scoped
if (10 === 10) {
    var firstName = 'Jack'
}
console.log(firstName)

// this will error b/c block-level scoping
if (10 === 10) {
    const lastName = 'Jack'
}
console.log(lastName)

// this will error b/c block-level scoping
if (10 === 10) {
    let middleName = 'Jack'
}
console.log(middleName)


const setname = function () {
    var surname = 'Sparrow'
}

setname()
console.log(surname)


// undefined
let age
console.log(age)

// undefined
var age
console.log(age)

// var gets hoisted to the top (even if it has a value)
console.log(age)
var age
