let name = '    Jack Sparrow    '

// length property
console.log(name.length)

// convert to uppercase (method)
console.log(name.toUpperCase())

// convert to lowercase (method)
console.log(name.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// trim method
console.log(name.trim())



// Challenge area

// isValidPassword (t/f)
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
    // can also be written as:
    // return password.length > 8 && !password.includes('password')
}
// true if length is more than 8, and doesn't contain the word "password"

console.log(isValidPassword('asdf'))
console.log(isValidPassword('abcdefghijklmnop'))
console.log(isValidPassword('asdfpassword1234'))