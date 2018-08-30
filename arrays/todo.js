const todos = [{
    text: 'Get milk',
    completed: true
}, {
    text: 'Walk the cat',
    completed: false
}, {
    text: 'Shave the yak',
    completed: true
}, {
    text: 'Clean the grill',
    completed: false
}, {
    text: 'Paint the bedroom',
    completed: false
}]

const sortTodos = (todos) => {
    todos.sort((a, b) => {
        if (a.completed === false && b.completed) {
            return -1
        } else if (b.completed === false && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

// 1. convert array to array of objects: text, completed (t/f)
// 2. create a function to remove a todo by text value

const deleteTodo = (todos, noteTitle) => {
    const index = todos.findIndex((todo) => todo.text.toLowerCase() === noteTitle.toLowerCase())
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}



const getThingsToDo = (todos) => {
    return todos.filter((todo, index) => todo.completed === false)
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// const theNote = deleteTodo(todos, 'walk the cat')

// console.log(theNote)
// console.log(todos)




// Delete the third item
// todos.splice(2, 1)
// Add a new item to end
// todos.push('Mow the lawn')
// Remove the first item
// todos.shift()

// console.log(`You have ${todos.length} todos!`)

// for (let count = 0; count <= todos.length - 1; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }