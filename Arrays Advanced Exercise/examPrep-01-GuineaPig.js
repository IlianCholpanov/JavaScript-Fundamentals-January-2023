function guineaPig(arr) {
    let food = Number(arr.shift()) * 1000;
    let hay = Number(arr.shift()) * 1000;
    let cover = Number(arr.shift()) * 1000;
    let guineaWeight = Number(arr.shift()) * 1000;
    let hasToGoToPetStore = false;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 === 0) {
            hay -= (food * 0.05);
        }
        if (i % 3 === 0) {
            cover -= (guineaWeight / 3);
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            hasToGoToPetStore = true;
            break;
        }
    }
    if (hasToGoToPetStore) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
guineaPig(([
    "10",
    "5",
    "5.2",
    "1"
]))