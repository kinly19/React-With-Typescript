import React, { useContext, useRef } from "react";
import { TodosContext } from "./store/todo-context";
import classes from './NewTodo.module.css';

// ============================== Notes ==============================
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events

// HTMLInputElement - interface provides special properties and methods for 
//  manipulating the options layout, and presentation of <input> elements.
//  https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

// ? - tells typescript to try access 'value' and if that succeeds store that enetered
//  value inside of enteredText, otherwise store null - const enteredText: string | undefined
// ===================================================================

// define our function to ts that it should receive a string as an argument and specify void as a return type
const NewTodo: React.FC = () => {
  
  const todosCtx = useContext(TodosContext);
  // telling ts useRef type will be an input element with no initial value (null)
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form}onSubmit={submitHandler}>
      <label>Add Todo</label>
      <input type="text" id="text" ref={todoTextInput}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;