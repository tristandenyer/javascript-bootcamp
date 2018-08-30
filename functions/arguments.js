// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score
    // as template string
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 50)
console.log(scoreText)


// Challenge area
let getTip = function (total, tipPercent = .2) {
    // return (total * tipPercent) + total
    // as template string
    let percent = tipPercent * 100
    let tipAmount = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tipAmount}`
}

let bill = getTip(100, .25)
console.log(bill)

