const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}
console.log(squareLong(3))
console.log(square(3))

const people = [{
    name: 'Jack',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)


// challenge
// 1. find the person with age 22
// 2. print their name

const person22 = people.find((person) => person.age === 22)

console.log(person22.name)