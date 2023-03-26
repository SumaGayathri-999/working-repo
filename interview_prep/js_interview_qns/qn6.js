//? What is the difference between Object.freeze() and const
//? -----const applies on the variables(bindings).we cannot assign new value to that variable(binding)
//? -----Object.freeze() aplies on values of properties of object but not on object i.e we cannot change the value of properties but we can change the value of object.it only shows error in the strict mode.

// @use "strict";
const a = 2;
// a = 3;
let obj = {
    "username":"suma",
    "age" : 20,
}
Object.freeze(obj);
// obj = {
//     "username":"gayathri",
//     "age" : 20,
// } 
obj.username = "gayathri"
console.log(obj);
