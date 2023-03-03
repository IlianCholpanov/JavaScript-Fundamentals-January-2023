function solve(people, groupType, day) {

    let price = 0;

    switch (groupType) {
        case "Students":
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46
            }
            if (people >= 30) {
                price *= 0.85;
            }
            //console.log(`Total price: ${(people * price).toFixed(2)}`);
            break;
        case "Business":
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16
            }
            if (people >= 100) {
                people -= 10;
            }
            //console.log(`Total price: ${(people * price).toFixed(2)}`);
            break;
        case "Regular":
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50
            }
            if (people >= 10 && people <= 20) {
                price *= 0.95
            }
            //console.log(`Total price: ${(people * price).toFixed(2)}`);
            break;

        //default:
            //break;
    }
    console.log(`Total price: ${(people * price).toFixed(2)}`);
}
solve(40,
    "Regular",
    "Saturday"
)