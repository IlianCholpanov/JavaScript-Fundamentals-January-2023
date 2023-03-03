function taxCalculator(arr) {
    let vehicles = arr.shift().split('>>');

    let familyTax = 50;
    let heavyDutyTax = 80;
    let sportsTax = 100;
    let sum = 0;

    for (let i = 0; i < vehicles.length; i++) {
        let command = vehicles[i];
        let [car, yearsOwned, kmTraveled] = command.split(' ');
        switch (car) {
            case 'family':
                let taxIncrease = Math.floor(kmTraveled / 3000) * 12;
                let taxDecrease = yearsOwned * 5;
                let familyTotalTax = familyTax - taxDecrease + taxIncrease;
                sum += familyTotalTax;
                console.log(`A ${car} car will pay ${familyTotalTax.toFixed(2)} euros in taxes.`);
                break;
            case 'heavyDuty':
                let heavyTaxIncrease = Math.floor(kmTraveled / 9000) * 14;
                let heavyTaxDecrease = yearsOwned * 8;
                let heavyDutyTotalTax = heavyDutyTax - heavyTaxDecrease + heavyTaxIncrease;
                sum += heavyDutyTotalTax;
                console.log(`A ${car} car will pay ${heavyDutyTotalTax.toFixed(2)} euros in taxes.`);
                break;
            case 'sports':
                let sportsTaxIncrease = Math.floor(kmTraveled / 2000) * 18;
                let sportsTaxDecrease = yearsOwned * 9;
                let sportsTotalTax = sportsTax - sportsTaxDecrease + sportsTaxIncrease;
                sum += sportsTotalTax;
                console.log(`A ${car} car will pay ${sportsTotalTax.toFixed(2)} euros in taxes.`);
                break;
            default:
                console.log("Invalid car type.");
                break;
        }
        //console.log(car, yearsOwned, kmTraveled);
    }
    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])