// apply some operation on every item 

const numbers = [1,2,3,4,5];

const doubled = numbers.map((item) => {return item*2} )
console.log(doubled);


//we are returning the object instead of operation

const nums =[1,2,3,4,5];

const double = nums.map((item)=>
{
    return   {
        "number" : item*2
    }
}
)
console.log(double);


//output :
//  [
//   { number: 2 },
//   { number: 4 },
//   { number: 6 },
//   { number: 8 },
//   { number: 10 }
// ]