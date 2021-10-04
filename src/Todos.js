import React from 'react';

const Todos = ({todos, deleteTodo}) => {  //Props

  const todoList = todos.length ? (    //Conditional Operator (a conditon b) ? condition 1 : condition 2  // Here if todos.length is some positive value = (true) and if todos.length = 0 (false)
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (   //If todos.length = 0 (false)
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;