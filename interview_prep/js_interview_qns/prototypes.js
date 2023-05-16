let arr =  [1,2,3,4,5];

Array.prototype.sum = function(){
   return this.reduce((acc,value)=>{return acc + value},0);
}
console.log(arr.sum());