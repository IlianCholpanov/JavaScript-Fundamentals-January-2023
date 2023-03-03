function orders(product, count) {
    let price = 0;
    switch (product) {
        case 'water':
            price = 1;
            break;
        case 'coffee':
            price = 1.50;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
        default:
            break;
    }
    console.log(`${(price * count).toFixed(2)}`);
}
orders("coffee", 2);