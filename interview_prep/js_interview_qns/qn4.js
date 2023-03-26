//Empty the array

let arr = [1,3,4,56,7];
// arr.length = 0;
// arr.splice(0,5);
console.log(arr);

//find the max number
let max = Math.max(...arr);
console.log(max);

//output :56

//find the second largest number
let sortedarr = arr.sort(compare);
function compare(a,b){
    return b-a;
}
console.log(sortedarr[1]);

//output : 7