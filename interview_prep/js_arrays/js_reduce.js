const numbers = [10,13,9,12,20,7];

const maximum = numbers.reduce(reducer,-Infinity);

function reducer(accumulator,value){
    if(accumulator >  value){
        return accumulator;
    }
    else{
        return value;
    }
}
console.log(maximum);

//output : 20