'use strict'

// Read existing notes from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save the todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    // clear list of notes in div by using ''
    document.querySelector('#todos').innerHTML = ''
    
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    // loop over todos array, create a span tag for each text
    filteredTodos.forEach((todo, index) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle completed value for todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    // if todo !== undefined
    if (todo) {
        todo.completed = !todo.completed
    }
}

// Generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')    
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    // if todo is completed, pre-check checkbox
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        // save to local storage
        saveTodos(todos)
        // then rerender the list without the note that has been removed
        renderTodos(todos, filters)
    })
    
    // Setup the todo title text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    
    // Setup the remove button
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        // save to local storage
        saveTodos(todos)
        // then rerender the list without the note that has been removed
        renderTodos(todos, filters)
    })
    todoEl.appendChild(removeButton)

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    
    return summary
}