let restaurant = {
    name: 'Nopalito',
    guestCapacity: 75, // number of seats total
    guestCount: 0, // number of guests in seats
    checkAvailablity: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailablity(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailablity(4))