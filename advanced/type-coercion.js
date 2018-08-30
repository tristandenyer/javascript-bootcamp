// 55 -- because you can concatenate a string
console.log('5' + 5)

// 0 -- because you cannot subtract a string, so it converts '5' to 5.
console.log('5' - 5)

// true, loose equality
console.log('5' == 5)

// false, strict equality, no coercion
console.log('5' === 5)


const value = true + 12
const type = typeof 123
console.log(type)
console.log(value)