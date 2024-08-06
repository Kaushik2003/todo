import PropTypes from "prop-types";
/*
todos=[{
title: 
description:
}]
*/ 
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};



export function Todos({todos}){
    
   return (<div>
    {todos.map(function(todo,index){
       return <div key={index}>
          <h1>{todo.title}</h1>
         <h2>{todo.description}</h2>
          <button>{todo.completed == true?"Completed":"Mark as complete"}</button>
        </div>
      })}
  </div>);
}

