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
                let familyTaxIncrease = Math.floor(kmTraveled / 3000) * 12;
                let familyTaxDecrease = yearsOwned * 5;
                let familyTotalTax = familyTax - familyTaxDecrease + familyTaxIncrease;
                sum += familyTotalTax;
                console.log(`A ${car} car will pay ${familyTotalTax.toFixed(2)} euros in taxes.`);
                break;
            case 'heavyDuty':
                let heavyDutyTaxIncrease = Math.floor(kmTraveled / 9000) * 14;
                let heavyDutyTaxDecrease = yearsOwned * 8;
                let heavyDutyTotalTax = heavyDutyTax - heavyDutyTaxDecrease + heavyDutyTaxIncrease;
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
    }

    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
  }

taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);
