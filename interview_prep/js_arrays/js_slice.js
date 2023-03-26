const numbers = [8,3,9,4,5,3]
var  portion = numbers.slice(1,4);
console.log(portion);
console.log(numbers);

//output
// [ 3, 9, 4 ]
// [ 8, 3, 9, 4, 5, 3 ]

//if we want last three elements
portion = numbers.slice(-3);
console.log(portion);

//output
// [ 4, 5, 3 ]

//if we want to get elements up to how may indexes
portion = numbers.slice(2);
console.log(portion);

// output
// [ 9, 4, 5, 3 ]