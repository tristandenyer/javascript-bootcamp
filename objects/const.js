const person = {
    age: 25
}

person.age = 28

console.log(person.age)

// Convert Grade Calculator Function to use const where appropriate

const gradeCalculator = function (studentScore = undefined, maxScore = 20) {
    const calculate = (studentScore / maxScore) * 100
    let letterGrade = ''
    
    if (calculate >= 90) {
        letterGrade = 'A'
    } else if (calculate >= 80) {
        letterGrade = 'B'
    } else if (calculate >= 70) {
        letterGrade = 'C'
    } else if (calculate >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${calculate}%).`
}

const percentage = gradeCalculator(16)
console.log(percentage)
