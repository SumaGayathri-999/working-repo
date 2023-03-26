//? Find the number of vowels in a string

let str = "suma gayathri";
let vowels = ['a','e','i','o','u']
let strArr = str.toLowerCase().split("");
console.log(strArr);
let num = strArr.reduce((acc,value)=>{
   if(vowels.includes(value)){
    console.log(value);
     return acc+1;
   }
   else{
    return acc;
   }
},0)
console.log(num)