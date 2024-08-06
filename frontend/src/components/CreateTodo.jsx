export function CreateTodo(){
    return <div>
      <input id="title"style={{
        padding: 10,
        margin:10
        }}
        type="text" placeholder="title"></input><br></br>
      
      <input id="desc"style={{
        padding: 10,
        margin:10,
        }}
        type="text" placeholder="description"></input><br></br>
      
      <button style={{
        padding:10,
        margin:10
      }}
      onClick={()=>{
        fetch("https://localhost:3000/todos",{
          method: "POST",
          body:{
            title: "",
            description:"",
          }
        }).then(async function(res){
           const json= await res.json();
           alert("Todo added");
        })
      }}>Add a todo</button>
    
    
    </div>
}