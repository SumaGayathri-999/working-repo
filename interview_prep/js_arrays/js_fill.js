const nums = [2,4,3,9,4,5];
const filled = nums.fill(0);
console.log(nums);
console.log(filled);

//output
// [ 0, 0, 0, 0, 0, 0 ]
// [ 0, 0, 0, 0, 0, 0 ]

function naturalNums(n){
    let natural = Array(n).fill(0).map((_,index)=>{return index+1})
    return natural;
}

console.log(naturalNums(10));

//output ---- [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
