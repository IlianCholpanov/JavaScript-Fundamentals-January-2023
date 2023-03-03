function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let total = 0;

    while (startingYield >= 100) {

        total += startingYield - 26;
        if (startingYield > 26) {
            startingYield -= 10;
            dayCounter++;
        }
    }
    if (startingYield < 100) {
        total -= 26;
    }


    if (total < 0) {
        total = 0;
    }

    console.log(dayCounter);
    console.log(total);
}
spiceMustFlow(450)