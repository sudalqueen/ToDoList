import React from 'react';
import '../style/TodoItem.css';

function TodoItem(props) {
    return (
        <div className="todo">
            <label className={props.todo.isComplete ? "done" : ""}>
                <input type="checkbox" checked={props.todo.isComplete}
                       onChange={(event => props.handleCheck(props.todo.id, event))}/>
                {props.todo.title}
            </label>
            <span className="trash" onClick={() => {
                props.handleDelete(props.todo.id)
            }}/>
        </div>
    );
}

export default TodoItem;
