// ? how can you find the two strings are anagram for each other
//? Anagram means - a word or phrase or name formed by rearranging of another, such as cinema --- iceman


const str1 = "mary";
const str2 = "army";

function isAnagram(str1,str2){
   let a =str1.toLowerCase().split("").sort().join();
   let b =str2.toLowerCase().split("").sort().join();
   return a === b;
}

console.log(isAnagram(str1,str2));