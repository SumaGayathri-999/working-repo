//Remove duplicates from Array
const strs = ["suma","surya","suma","surya"];

function unique(strs){
    return strs.filter((item,index)=>{return strs.indexOf(item) == index})
}
console.log(unique(strs));

//output
// [ 'suma', 'surya' ]

