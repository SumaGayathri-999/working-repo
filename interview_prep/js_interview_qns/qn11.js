// ? FInd the missing numbers in the array from n to n;

const arr = [1,3,4,2,6,9,10];
let maximum = Math.max(...arr);
let minimum = Math.min(...arr);
console.log(maximum);
let missing = []
for(i = minimum; i <= maximum; i++) {
   if(!arr.includes(i)){
      missing.push(i);
   }
}
console.log(missing);

// output ----
// [ 5, 7, 8 ]

// ? Find the even and odd numbers in an array

let even = arr.filter((item)=>{ return item % 2 === 0})
let odd = arr.filter((item)=>{ return !(item % 2 === 0)})

console.log(`Even Numbers are ${even}`);
console.log(`Odd numbers are ${odd}`)

// Output ---
// Even Numbers are 4,2,6,10
// Odd numbers are 1,3,9

//? FInd the Factorial of a given Number
let num = 5;
let factorial = 1;
for(i = num; i>=1 ; i--){
   factorial = factorial * i;
}
console.log(factorial);

//? Find the prime Number in javascript

let number = 9;
let count = 0
// for(i=2; i < number; i++){
//    if(number % i === 0) {
//      count++
//    }

// }
// if(count == 0){
//     console.log("it is prime number");
// }
// else{
//     console.log("it is not prime number");
// }
// console.log(count)

