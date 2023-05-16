const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/posts/1'
const getData = async()=>{
    try{
        const {data} = await axios.get(URL);
        console.log(data);
    }
    catch(err){
        if(err.response){
            console.log("This error has raised beacuse of request was made and server has responded with the err status code falls out of the range of 2XX to 5XX ");
            // console.log(err.response.status);
            // console.log(err.response.data);
            // console.log(err.response.headers);
            if(err.response.status === 400){
                console.log("Bad request");
            }
            else if(err.response.status === 404){
                console.log("Page not Found");
                // navigate to page not found screen
            }
        }
        else if(err.request){
            console.log("The request was made but no response was reciev. This happens when we have a bad network (or) if our backend is hanging on eachrequest and not returning response on time (or) making cors requesrt,...one of the common request that it sends is network error for all types of errors mentioned above");
            console.log(err);
        }
        else{
           console.log("something wrong with making of request");
        }
    }
}
getData();
console.log("hello");


///post with axios vs fetch

// axios.post(URL,{
//     // timeout:1000,
//     headers:{
//         "content-Type" : "application/json",
//     },
//     data:{
//         first_name:"suma",
//         last_name : "Gayathri"
//     }
// });

// fetch(URL,{
//     method:'POST',
//     headers:{
//         'content-type' : "application/json",
//     },
//     body:JSON.stringify({
//         first_name:"suma",
//         last_name : "Gayathri"
//     })
// })