const letters = ['a' , 'a' ,'b' ,'c', 'b', 'a'];

const count = []

letters.forEach((item) =>{
    if(count[item]){
        count[item]++;
    }
    else{
        count[item] = 1;
    }
})

console.log(count);

// output : [ a: 3, b: 2, c: 1 ]