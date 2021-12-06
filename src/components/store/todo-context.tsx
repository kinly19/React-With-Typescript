import React, { useState } from 'react';
import Todo from "../models/todo";

// type alias
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([])
  // to make it clear, that initially we have an empty array... but
  // then eventually fill the array full of todo items
  // we need to tell ts what 'type' of data this state should receive
  // because TypeScript treats a class as both value and type..., we can pass our Todo class (models/todo.ts) as a type
  // now ts knows this state should be an array of Todos which have the shape of our Todo class.

  const addTodoHandler = (item: string) => {
    const newTodo = new Todo(item);
    setTodos(prevState => {
      return prevState.concat(newTodo);
    });

    // setTodos(prevState => [...prevState, newTodo]) --> mutate existing array
  }

  const removeTodoHandler = (todoId: string) => {
    console.log("Remove selected todo");
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj= {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
}; 

export default TodosContextProvider; 

