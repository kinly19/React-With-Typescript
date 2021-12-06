// import { Fragment } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './components/store/todo-context';

// type TodoItems = {
//   text: string,
//   id: string;
// }[];

// const DUMMY_DATA: TodoItems = [
//   {
//     text: 'Learn React',
//     id: 'T1'
//   }, 
//   {
//     text: 'Learn TypeScript',
//     id: 'T2'
//   },
// ];

function App() {

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ]

 
  // const [todos, setTodos] = useState<Todo[]>([])
  // // to make it clear, that initially we have an empty array... but
  // // then eventually fill the array full of todo items
  // // we need to tell ts what 'type' of data this state should receive
  // // because TypeScript treats a class as both value and type..., we can pass our Todo class (models/todo.ts) as a type
  // // now ts knows this state should be an array of Todos which have the shape of our Todo class.

  // const addTodoHandler = (item: string) => {
  //   const newTodo = new Todo(item);
  //   setTodos(prevState => {
  //     return prevState.concat(newTodo);
  //   });

  //   // setTodos(prevState => [...prevState, newTodo]) --> mutate existing array
  // }

  // const removeTodoHandler = (todoId: string) => {
  //   console.log("Remove selected todo");
  //   setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  // };

  // console.log(todos)

  return (
    // without context
    // <Fragment>
    //   <NewTodo onAddTodo={addTodoHandler}/>
    //   <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    // </Fragment>

    //with react context 
    <TodosContextProvider>
    <NewTodo />
    <Todos />
  </TodosContextProvider>
  );
}

export default App;
