// sorting the strings
let names = ["suma", "aarya", "maha" ,"krish"];
names.sort();
console.log(names);

//output
// [ 'aarya', 'krish', 'maha', 'suma' ]
 
// *********************************************

//sorting the numbers

//Ascending order
let nums = [8,2,9,4,3,7];
nums.sort(compare);
function compare(a,b){
    return a-b;
    //returns < 0 then a sorted first
    //returns > 0 then b sorted first
    //returns = 0 nothing changed.

}
console.log(nums);

// output : [ 2, 3, 4, 7, 8, 9 ]

//descending order
let numbers = [8,2,9,4,3,7];
numbers.sort(compareFunction);
function compareFunction(a,b){
    return b-a;

}
console.log(numbers);

//output : [ 9, 8, 7, 4, 3, 2 ]

// *****************************************

const obj = [
    {
        "name" : "suma",
        "age"  : 20,
    },
    {
        "name" : "kavya",
        "age"  : 13,
    },
    {
        "name" : "sreejs",
        "age"  : 23,
    },
    {
        "name" : "ramya",
        "age"  : 17,
    }
]
obj.sort(compareFun);
function compareFun(a,b){
   return a.age - b.age;
}
console.log(obj);

//output 
// [
//     { name: 'kavya', age: 13 },
//     { name: 'ramya', age: 17 },
//     { name: 'suma', age: 20 },
//     { name: 'sreejs', age: 23 }
//   ]