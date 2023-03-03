function shoppingList(input) {
    let itemList = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let [command, item, newItem] = input[i].split(' - ');
        if (command === 'End') {
            break;
        }
        switch (command) {
            case 'Add':
                if (!itemList.includes(item)) {
                    itemList.push(item);
                }
                break;
            case 'Remove':
                if (itemList.includes(item)) {
                    //console.log(itemList.indexOf(item));
                    itemList.splice(itemList.indexOf(item), 1); //(finding index of the current item, count of items to remove, items to add);

                }
                break;
            case 'Bonus phone':
                let [existingPhone, newPhone] = newItem.split(':');
                let index = itemList.indexOf(existingPhone);
                if (index !== -1) {
                    itemList[index] = newPhone;
                }
                break;
            case 'Last':
                let indexToMove = itemList.indexOf(item);
                if (indexToMove !== -1) {
                    let itemToMove = itemList.splice(indexToMove, 1)[0];
                    itemList.push(itemToMove);
                }
                break;
        }
    }
    console.log(itemList.join(', '));
}
shoppingList((["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])

)