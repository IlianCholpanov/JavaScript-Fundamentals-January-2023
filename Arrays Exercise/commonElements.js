function commonElements(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let currentWord = firstArr[i];
        if (secondArr.includes(currentWord)) {
            console.log(currentWord);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])