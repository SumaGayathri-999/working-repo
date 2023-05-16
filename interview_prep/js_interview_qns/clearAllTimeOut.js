
// clearTimeOut is not a built in function which is used to cancel all the setTimeout Timers
let timers = [];
const mySetTimeOut = (fn,delay)=>{
    const timerId = setTimeout(fn,delay);
    timers.push(timerId);
    return timerId;
}
const clearAllTimeOut = ()=>{
   while(timers.length){
     clearTimeout(timers.pop());
   }
}

mySetTimeOut(()=>{
    console.log("1");
},1000)
mySetTimeOut(()=>{
    console.log("2");
    clearAllTimeOut();
},5000)
mySetTimeOut(()=>{
    console.log("3");
},6000)
mySetTimeOut(()=>{
    console.log("4");
},8000)