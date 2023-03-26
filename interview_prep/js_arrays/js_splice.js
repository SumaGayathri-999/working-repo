const numbers = [9,2,6,8,5,3];
const deleted = numbers.splice(1,3);
console.log(numbers);
console.log(deleted);

// output 
// [ 9, 5, 3 ]  ---original Array
// [ 2, 6, 8 ]  ---deleted and returned array

// when we want to repllace the deleted elemnts with new items

const nums = [9,2,6,8,5,3];
const deleteArray = nums.splice(1,3,3,4,5);
console.log(nums);
console.log(deleteArray);

//output
// [ 9, 3, 4, 5, 5, 3 ]
// [ 2, 6, 8 ]