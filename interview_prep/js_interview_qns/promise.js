let p = new Promise((resolve,reject)=>{
    let sum = 50;
    if(sum === 50){
       resolve("success")
    }
    else{
      reject("failure")
    }
  })
  p.then((message)=>{
    console.log(message)
  })
  .catch((message)=>{
     console.log(message);
  })