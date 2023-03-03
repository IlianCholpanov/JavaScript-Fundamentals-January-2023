function simpleCalculator(numOne, numTwo, operation) {
    switch (operation) {
        case 'multiply':
            console.log(numOne * numTwo);
            break;
        case 'divide':
            console.log(numOne / numTwo);
            break;
        case 'add':
            console.log(numOne + numTwo);
            break;
        case 'subtract':
            console.log(numOne - numTwo);
            break;
        default:
            break;
    }
}
simpleCalculator(5, 5, 'multiply')