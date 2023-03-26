//Reverse string

const str = "i am Suma Gayathri";
let reversed = str.split("").reverse().join("");
console.log(reversed);

//output  ----- irhtayaG amuS ma i

//home made method
const reverser  = [];
for(i = str.length-1; i>=0 ;i--){
    reverser.push(str[i]);
}
console.log(reverser.join(""));

//swaping two variables

let a =1;
let b =2;

let temp = a;
a = b;
b = temp;
console.log(`a : ${a}, b : ${b}`)
