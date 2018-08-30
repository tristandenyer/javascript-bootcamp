const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Japan.'
}, {
    title: 'Things to get',
    body: 'Noodles, eggs, milk.'
}, {
    title: 'Dinners for the week',
    body: 'Mac n cheese, hamburgers, salad.'
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === note.title.toLowerCase()
//     })
//     return notes[index]
// }


const sortNotes = (notes) => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = (notes, noteTitle) => {
    return notes.find((note, index) => note.title.toLowerCase() === noteTitle.toLowerCase())
}

const findNotes = (notes, query) => {
    return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}



// console.log(findNotes(notes, 'trip'))

// const note = findNote(notes, 'things to get')
// console.log(note)

sortNotes(notes)
console.log(notes)