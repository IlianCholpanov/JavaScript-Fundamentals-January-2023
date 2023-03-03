// Splice mutates the original array
let cars = ['bmw', 'mercedess', 'toyota', 'audi'];
console.log(cars);


// Remove single element at the middle and returns array with the removed elements
let removedCars = cars.splice(2, 1);
console.log(cars);
console.log(removedCars);

// // Remove two elements at the middle
// cars = ['bmw', 'mercedess', 'toyota', 'audi'];
// let middleCars = cars.splice(1, 2);
// console.log('Original array', cars);
// console.log('Middle cars', middleCars);

// // Add elements in the middle
// cars = ['bmw', 'mercedess', 'toyota', 'audi'];
// cars.splice(1, 0, 'nissan', 'opel');
// console.log(cars);

// // Combine add and remove
// cars.splice(1, 2, 'honda');
// console.log(cars);