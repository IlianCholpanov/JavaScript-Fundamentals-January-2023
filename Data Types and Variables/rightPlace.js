// function rightPlace(string, char, secondString) {

//     let res = string.replace('_',char);
//     let output = res === secondString? 'Matched': 'Not Matched';
//     console.log(output);

// }
function match(word, char, comparison) {
    let replaced = word.replace('_', char);
    if (replaced === comparison) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
match('Str_ng', 'i', 'String');

