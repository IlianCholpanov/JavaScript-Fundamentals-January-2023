function manOWar(input) {
    let pirateShipStatus = input.shift().split('>');
    let warshipStatus = input.shift().split('>');
    let sectionHeath = Number(input.shift());
    let isAlive = 0;
 
    let currentLine = input.shift();
 
    while (currentLine != 'Retire') {
        let elements = currentLine.split(' ');
        let command = elements[0];
 
        switch (command) {
            case 'Fire':
                let index = Number(elements[1]);
                let damage = Number(elements[2]);
                if (warshipStatus.length > index && index >= 0) {
                    let healthLeft = Number(warshipStatus[index]) - damage;
                    warshipStatus.splice(index, 1, healthLeft);
                    if (healthLeft <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        isAlive++;
                        break;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(elements[1]);
                let endIndex = Number(elements[2]);
                let warshipDamage = Number(elements[3]);
                if (pirateShipStatus.length > endIndex && startIndex >= 0 && endIndex > startIndex) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        let pirateHealthLeft = Number(pirateShipStatus[i]) - warshipDamage;
                        pirateShipStatus.splice(i, 1, pirateHealthLeft);
                        if (pirateHealthLeft <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            isAlive++;
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                let reparedIndex = Number(elements[1]);
                let healthAdded = Number(elements[2]);
                if (pirateShipStatus.length > reparedIndex && reparedIndex >= 0) {
                    let healthUpdated = Number(pirateShipStatus[reparedIndex]) + healthAdded;
                    if (healthUpdated > sectionHeath) {
                        healthUpdated = sectionHeath;
                    }
                    pirateShipStatus.splice(reparedIndex, 1, healthUpdated);
                }
                break;
            case 'Status':
                let counter = 0;
                for (let i = 0; i < pirateShipStatus.length; i++) {
                    if (pirateShipStatus[i] < sectionHeath * 0.20) {
                        counter += 1;
                    }
                }
                console.log(`${counter} sections need repair.`);
                break;
        }
        currentLine = input.shift();
    }
    let sumPirate = 0;
    let sumWarship = 0;
    if (isAlive === 0) {
        for (let i = 0; i < pirateShipStatus.length; i++) {
            sumPirate += Number(pirateShipStatus[i]);
        }
        for (let i = 0; i < warshipStatus.length; i++) {
            sumWarship += Number(warshipStatus[i]);
        }
        console.log(`Pirate ship status: ${sumPirate}\nWarship status: ${sumWarship}`);
    }
}
manOWar(([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]))
//(!pirateShipStatus.includes(Number(0)|| '0')) && (!warshipStatus.includes(Number(0)|| '0'))