const outer = (...arr)=>{
    let index = 0;
    return()=>{
        let status = arr[index++];
        console.log(status);
        if(index >= arr.length){
            index = 0;
        }
    }
}
let inner = outer("on","off");
inner();
inner();
inner();
inner();
inner();
