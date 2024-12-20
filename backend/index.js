const express=require("express");
const app=express();
const {createTodo, updateTodo}=require("./types");
const { todo } = require("./database");
const port=3000;
const cors=require("cors")
app.use(express.json());
app.use(cors({
  origin: "https://localhost:5173"
}));
  

app.post("/todo",async function(req,res){
  const createPayload=req.body;
  const parsedPayload=createTodo.safeParse(createPayload);
  if(!parsedPayload.success)
    {
      res.status(411).json
      ({
        msg: "You have sent the wrong inputs",
      })
    }
  
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  })
  res.json({
    msg: "Todo created"
  })
  return;
})


app.get("/todos",async (req,res)=>{
    const todos=await todo.find({});
    console.log(todos)//promise


    res.json({
      todos
    })
})



app.put("/completed",async (req,res)=>{
const updatePayload=req.body;
const parsedPayload=updateTodo.safeParse(updatePayload);
if(!parsedPayload.success){
  res.status(411).json({
    msg: " You have send the wrong inputs",
  })
}
return;

await todo.update(
  {_id: req.body.id,},
{completed: true})
res.json({
  msg: "Todo is marked as completed"
})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })