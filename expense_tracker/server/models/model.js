const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name : {type:String,default:"Anonymous"},
    type : {type:String,default:"Investment"},
    amount : {type : Number},
    date :{type : Date, default : new Date()}
},{strict:true})
mongoose.set('strictQuery', true);
const categoriesSchema = new mongoose.Schema({},{strict:false});
const categories = mongoose.model("categories",categoriesSchema);
const expenses = mongoose.model("expenses", expenseSchema);
module.exports = {
    categories,expenses
}
