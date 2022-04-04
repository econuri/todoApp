import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            opacity: 0.4,
            textDecoration: "line-through",
        };
        const { completed, id, title } = this.props.todo;

        return (
            <div>
                <li className={styles.item}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                    </button>
                    <span style={completed ? completedStyle : null}>{title}</span>                    
                </li>
            </div> 
        )
    }
}

// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem;
