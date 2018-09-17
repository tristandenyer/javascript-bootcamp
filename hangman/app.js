// Primitive value: string, number, boolean, null, undefined (everything not in this list is an object)

// Prototype chain for:
// Object: looks to myObject first, then Object.prototype, then look to null (which never has a property)
// Array: looks to myArray first, then Array.prototype, then Object.prototype, then look to null (which never has a property)
// Function myFunction, then Function.prototype, then Object.prototype, then look to null (which never has a property)
// String: myString, then String.prototype, then Object.prototype, then look to null (which never has a property)
// Number: myNumber, then Number.prototype, then Object.prototype, then look to null (which never has a property)
// Boolean: myBoolean, then Boolean.prototype, then Object.prototype, then look to null (which never has a property)
const product = 'Computer'
console.log(product.split)

const otherProduct = new String('Phone')
console.log(otherProduct)