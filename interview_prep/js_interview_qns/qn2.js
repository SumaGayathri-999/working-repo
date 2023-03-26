//fibonacci series

let a = 1 ;
let b = 2 ;
let c ;
let arr = [a,b];
for(let i = 0; i <= 5; i++){
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
}
console.log(arr);

//output ---- [ 1,  2,  3,  5, 8, 13, 21, 34 ]

