function personInfo(lFirstName, iLastName, fAge) {
    let person = {
        firstName: lFirstName,
        lastName: iLastName,
        age: fAge,
    }
    return person;
}
console.log(personInfo(
    "Peter",
    "Pan",
    "20"
));