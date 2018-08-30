// challenge area

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter
        } else {
            puzzle = puzzle + '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('Cat', 4)
console.log(game1.getPuzzle())

const game2 = new Hangman('Dog House', 3)
console.log(game2.getPuzzle())

