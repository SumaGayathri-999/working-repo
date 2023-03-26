let num = 5;
let factorial =  1;
for(i =  1; i<=5; i++){
    factorial = factorial  * i;
}
console.log(factorial);
console.log(5*4*3*2*1);

let number = 7;
let count = 0;
for(i =2;i<=number;i++){
    if((number%i === 0)){
      count++;
    }
}

if(!(count==0)){
    console.log("not a prime")
}
else{
    console.log("prime")
}

let str = "suma gayathri";
let splitted = str.split("");
let vowels = ['a','e','i','o','u'];
let vows = splitted.reduce(reducer,0);
function reducer(acc,value){
    if(vowels.includes(value)){
        return acc+1;
    }
    else{
        return acc;
    }
}
console.log(vows);