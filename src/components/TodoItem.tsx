import classes from './TodoItem.module.css';

const TodoItem: React.FC<{onRemoveTodo: () => void }> = (props) => {



  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.children}</li>;
};

export default TodoItem;
