function outer(){
    let count = 0;
    return ()=>{
        count++;
        console.log(count);
    }
}

let innerOne  = outer();
let innerTwo  = outer();
innerOne();
innerOne();
innerOne();

innerTwo();
innerTwo();

innerOne();
