function houseParty(array) {
    let list = [];

    for (let el of array) {
        let commands = el.split(' is ');
        let name = commands[0];
        let command = commands[1];
        switch (command) {
            case 'going!':
                if (list.indexOf(name) === -1) {
                    list.push(name);
                } else {
                    console.log(`${name} is already in the list!`);
                }
                break;
            case 'not going!':
                if (list.indexOf(name) === -1) {
                    console.log(`${name} is not in the list!`);
                } else {
                    list.splice(list.indexOf(name), 1);
                }
                break;
        }
    }
    console.log(list.join('\n'));
}
houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])
console.log('---------------------');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)