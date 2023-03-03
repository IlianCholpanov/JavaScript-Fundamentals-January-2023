function train(array) {
    let wagons = array.shift().split(' ').map(el => Number(el));
    let capacity = Number(array.shift());

    for (let el of array) {
        let command = el.split(' '); // 'add 10' -> ['add', '10'] // 30 -> ['30'];
        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= capacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])