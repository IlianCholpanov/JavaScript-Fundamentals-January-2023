function city(obj) {
    for (let [keys, value] of Object.entries(obj)) {
        console.log(`${keys} -> ${value}`)
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})