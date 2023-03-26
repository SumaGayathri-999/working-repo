//? Find the average of the given array

const arr = [10,33,55,24,12];
const total_sum = arr.reduce(reducer,0);
function reducer(accumulator,value){
    return accumulator + value;
}
let average = total_sum/arr.length;
console.log(average);

//output : 26.8

//? Find the common Elements in two Array

const arrOne =[1,2,3,4,5];
const arrTwo = [3,4,57,8];
let commonElements = arrOne.filter((item)=>{return arrTwo.includes(item)});
console.log(commonElements);

//output : [ 3, 4 ]