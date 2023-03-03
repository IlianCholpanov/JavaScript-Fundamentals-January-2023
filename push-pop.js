let cars = ['bmw', 'mercedess', 'audi'];
console.log(cars);
// Add multiple elements at a time
cars.push('vw', 'ford');
console.log(cars);
//Remove the last element of the array
cars.pop();
console.log(cars);
//Remove and get the last element
let lastCar = cars.pop();
console.log(cars);
console.log('removed car is', lastCar);
console.log(cars.includes('bmw'));
//Get new length after push
let currentCarsCount = cars.push('renault');
console.log(cars);
console.log('Current cars count is', currentCarsCount);