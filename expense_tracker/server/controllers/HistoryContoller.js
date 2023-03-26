const express = require('express');
const router = express.Router();
const expenses = require("../models/model").expenses;
const categories = require("../models/model").categories;

 router.get("/categories",(req,res)=>{
   categories.find({},(err,data) =>{
        if(err) throw err;
        // let result = data.map(item=>Object.assign({},{type:item.type,color:item.color}))
        // return res.json(result);
       return res.json(data);
    })
})
router.post("/create_expense",async (req,res)=>{
    if(!req.body)return res.status(400).json("Post HTTP status noyt provided");
    let date = new Date();
    let name = req.body.name;
    let type = req.body.exp_type;
    let amount = req.body.amount;
    const create = await new expenses({
      name,
      type,
      amount,
      date
    });
    create.save(function(err){
        if(!err){
           return res.json(create)
        }
    })
    
    
});
router.get("/get_expenses",(req,res)=>{
    expenses.find({},(err,data)=>{
        res.json(data)
    })
})

router.delete("/delete_expense",(req,res)=>{
    expenses.deleteOne({_id:req.body.id},(err)=>{
        if(err) return res.json("Error while deleting the Expense")
        return res.json("Expense Deleted");
    }
    )
})
router.get("/get_labels",(req,res)=>{
   expenses.aggregate([
        {
            $lookup:{
                from:"categories",
                localField:"type",
                foreignField:"type",
                as:"combined_info"
            }
        },
        {
            $unwind:"$combined_info"
        }
    ],(err,data)=>{
        if(err) throw err;
        let result_arr = data.map(item=>Object.assign({},{_id:item._id,name:item.name,type:item.type,date:item.date,amount:item.amount,color:item.combined_info["color"]}))
        return res.json(result_arr);
    })
  
})
module.exports = router;