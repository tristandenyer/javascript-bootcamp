let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


// Challenge area
// Print: name, age, location
// increase age by 1, and print message again

let myAddressBook = {
    name: 'Jack',
    age: 20,
    location: 'Los Angeles, CA'
}

console.log(`${myAddressBook.name} is ${myAddressBook.age} and lives in ${myAddressBook.location}.`)

myAddressBook.age = myAddressBook.age + 1

console.log(`${myAddressBook.name} is ${myAddressBook.age} and lives in ${myAddressBook.location}.`)