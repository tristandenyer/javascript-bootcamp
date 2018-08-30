let myAccount = {
    name: 'Jack',
    expenses: 0,
    income: 0
}
// add expense function
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}
// add income function
let addIncome  = function (account, paycheck) {
    account.income = account.income + paycheck
}

// reset function - account amounts to zero (0)
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// get account summary function
let accountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`
}
addExpense(myAccount, 5.00)
addIncome(myAccount, 1000)
addExpense(myAccount, 6.00)
addIncome(myAccount, 110)
// Print: "Account for Jack has $900. $1000 in income. $100 in expenses."
console.log(accountSummary(myAccount))

resetAccount(myAccount)
console.log(accountSummary(myAccount))

// to test:
// AddIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

