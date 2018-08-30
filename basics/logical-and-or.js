let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('It\'s nice outside!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh. Do what you want.')
}

let isGuestOneVegan = false
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Show only vegan menu.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up some vegan options.')
} else {
    console.log('Offer daily menu.')
}