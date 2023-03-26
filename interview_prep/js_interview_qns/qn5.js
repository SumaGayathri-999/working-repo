//check a string is palindrome

let str = "suus"
let lower = str.toLowerCase();
let reverseStr = lower.split("").reverse().join("");
console.log(reverseStr);
if(lower === reverseStr){
    console.log("it is palindrome");
}
else{
    console.log("it is not palindrome");
}