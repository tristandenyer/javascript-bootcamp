// const myAge = 27
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// console.log(message)

// const myAge = 20
// const showPage = () => {
//     return 'Showing the page'
// }
// const showErrorPage = () => {
//     return 'Showing error page'
// }
// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

// challenge

const team = ['Tyler', 'Porter', 'John', 'Steve', 'Jack']
const teamSize = team.length
// console.log(teamSize)
const goodTeamSize = () => {
    return `Team size: ${teamSize}`
}
const badTeamSize = () => {
    return `Too many people on your team!`
}
const messageTeam = teamSize <= 4 ? goodTeamSize() : badTeamSize()
console.log(messageTeam)