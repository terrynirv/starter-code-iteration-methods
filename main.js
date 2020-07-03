// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes2)
const Kata1 = users.filter(users => users.isActive == true)
printKata(1, Kata1)
const Kata2 = users.map(users => users.email)
printKata(2, Kata2)
const Kata3 = users.some(users => users.company === "OVATION")
printKata(3, Kata3)
const Kata4 = users.find(users => users.age > 38)
printKata(4, Kata4)
const Kata5 = users.filter(users => users.isActive == true).find(users => users.age == 38)
printKata(5, Kata5)
const Kata6 = users.filter(users => users.company == "ZENCO").map(users => users.balance)
printKata(6, Kata6)
const Kata7 = users.filter(users => users.tags.includes("fugiat")).map(users => users.age)
printKata(7, Kata7)