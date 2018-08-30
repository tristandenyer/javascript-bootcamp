let isAccoutnLocked = false
let userRole = 'admin'

if (isAccoutnLocked) {
    console.log('Yes, it is locked.')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}


let temp = 5

if (temp < 32) {
    console.log("It is freezing outside!")
} else if (temp >= 80) {
    console.log("It is hot outside!")
} else {
    console.log("Go for it. It is pretty nice!")
}