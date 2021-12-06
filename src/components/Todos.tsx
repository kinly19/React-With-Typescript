import { useContext } from "react";
import { TodosContext } from "./store/todo-context";
import Todo from "./models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

// ============================== Notes ==============================
// React.FC - makes it clear that this here is a functional component 
// <{}> we can also define our own props this function will use (items)

// const Todos: React.FC<{items: {text:string, id:string}[]}> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// };
// const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) =>
// ===================================================================

const Todos: React.FC = (props) => {

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        console.log(item);
        return (
          <TodoItem
            key={item.id}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // onRemove function will receive item.id as a string when its being called 
          >
            {item.text}
          </TodoItem>
        );
      })}
    </ul>
  );
};

export default Todos;