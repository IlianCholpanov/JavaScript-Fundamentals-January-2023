function charactersInRange(char1, char2) {
    let numFromChar1 = convertFromCharToNumber(char1);
    let numFromChar2 = convertFromCharToNumber(char2);

    let startIndex = smallestOfTwoNUmbers(numFromChar1, numFromChar2);
    let endIndex = biggestOfTwoNUmbers(numFromChar1, numFromChar2);

    let buff = '';
    for (let i = startIndex + 1; i < endIndex; i++) {
        buff = concatenationString(buff, convertFromNumberToChar(i));
    }
    console.log(buff);

    function concatenationString(buff, string) {
        buff += string + ' ';
        return buff;
    }

    function convertFromNumberToChar(num) {
        return String.fromCharCode(num);
    }

    function convertFromCharToNumber(char) {
        return char.charCodeAt(0);
    }

    function smallestOfTwoNUmbers(a, b) {
        return Math.min(a, b);
    }
    function biggestOfTwoNUmbers(a, b) {
        return Math.max(a, b);
    }
}
charactersInRange('`', 'z')