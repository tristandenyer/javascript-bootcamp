const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })

    // Or written as...
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = lettersUnguessed.length === 0
    //
    // Or written as...
    // let finished = true
    //
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
    //
    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadBuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadBuess) {
        this.remainingGuesses-- // can also be written as this.remainingGuesses = this.remainingGuesses -1
    }

    this.calculateStatus()
}
