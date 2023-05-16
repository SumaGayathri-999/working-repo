function memonize(fun){
    let cache = {};
    return (...args)=>{
       let arguments = JSON.stringify(args);
       if(cache[arguments]){
         console.log("getting the data from cache");
         return cache[arguments];
       }
       else{
           console.log("computed value");
           let sum = fun(...args);
           cache = {...cache,[arguments]:sum}
           return sum;
       }
    }
}

const add = (a,b,c)=>{
      return (a+b+c);
}
const addition = memonize(add);
console.log(addition(1,2,3));
console.log(addition(1,2,3));
console.log(addition(5,9,4));
console.log(addition(1,2,3));


