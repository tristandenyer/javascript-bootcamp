const account = {
    name: 'Jack',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    income: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accoutnBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })        

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accoutnBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accoutnBalance.toFixed(2)}. $${totalIncome.toFixed(2)} in income. $${totalExpenses.toFixed(2)} in expenses.`
    }
}



// Add income array to account
// addIncome method -> description, amount
// tweak getAccountSummary
// Print: "name has a balance of $. $ in income. $ in expenses."

account.addExpense('Rent', 950)
account.addExpense('Coffee', 3.50)
account.addIncome('Job', 1000)

// console.log(account.expenses) // test push
// console.log(account.income) // test push

console.log(account.getAccountSummary())