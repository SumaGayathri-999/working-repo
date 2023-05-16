const axios = require('axios');


// Calculate the response time using axios interceeptors


const URL = 'https://jsonplaceholder.typicode.com/posts/1';

// const getDataAxios = axios.create({
//     baseURL : URL,
// })

axios.interceptors.request.use((req)=>{
    req.meta = req.meta || {};
    req.meta.requestStartedAt = new Date().getTime();
    return req;
})

//this takes two call back functions first one is for success response and secondone is for failure response
axios.interceptors.response.use((res)=>{
    res.duration = new Date().getTime() - res.config.meta.requestStartedAt;
    return res;
},(res)=>{
    res.duration = new Date().getTime() - res.config.meta.requestStartedAt;
    throw res;
})


const getData = async ()=>{
    try{
        const {data,duration} = await axios.get(URL);
        console.log(data);
        console.log(`Response Duration : ${duration} milliseconds`);
    }
    catch(err){
        if(err.response){
            console.log("2XX to 5XX");
            console.log(err.duration);
        }
        else if(err.request){
            console.log("request error or cors error");
            console.log(err.duration);
        }
        else{
            console.log("something wrong in making request or in our app");
            console.log(err.duration);
        }
    }
};

getData();


