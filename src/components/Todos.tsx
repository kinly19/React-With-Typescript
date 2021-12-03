import Todo from "./models/todo";
import TodoList from "./TodoItem";

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

// ===================================================================

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        console.log(item);
        return <TodoList key={item.id}>{item.text}</TodoList>;
      })}
    </ul>
  );
};

export default Todos;