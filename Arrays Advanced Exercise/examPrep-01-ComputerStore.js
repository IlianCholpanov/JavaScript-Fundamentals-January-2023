function computerStore(input) {
    //The taxes are 20% of each part's price you receive. 
    //If the customer is special, he has a 10% discount on the total price with taxes.
    //If a given price is not a positive number, you should print "Invalid price!" and continue with the next price.
    //If the total price is equal to zero, you should print "Invalid order!" 
    let i = 0;
    let command = input[i];
    let sum = 0;

    while(command !== 'special' || command !== 'regular'){
        let currentPrice = Number(command);
        sum += currentPrice;
        i++;
        command++;
    }
    console.log(sum);

    //Congratulations you've just bought a new computer!
    // Price without taxes: ${total price without taxes}$
    // Taxes: ${total amount of taxes}$
    // -----------
    // Total price: ${total price with taxes}$"

}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))