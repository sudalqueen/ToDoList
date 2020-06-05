import React, {useState} from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css';

function TodoList() {
    const [userInput, setUserInput] = useState('');
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "React study",
            isComplete: false,
            isDelete: false
        },
        {
            id: 2,
            title: "Do Something",
            isComplete: true,
            isDelete: false
        },
        {
            id: 3,
            title: "Sleep Well",
            isComplete: false,
            isDelete: false
        }
    ]);

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function AddTodoItem() {
        const newTodoItem = {
            id: todos.length + 1,
            title: userInput,
            isComplete: false,
            isDelete: false
        };

        setTodos(todos.concat(newTodoItem));
        setUserInput('');
    }

    function checkTodoItem(id, event) {
        const isChecked = event.currentTarget.checked;

        const targetIndex = todos.findIndex(todo => todo.id === id);
        let newTodos = [...todos];
        newTodos[targetIndex] = {
            ...todos[targetIndex],
            isComplete: isChecked
        };

        setTodos(newTodos);
    }

    function deleteTodoItem(id) {
        let targetIndex = todos.findIndex(todo => todo.id === id);

        const newTodos = [].concat(todos.slice(0, targetIndex), todos.slice(targetIndex + 1, todos.length));
        setTodos(newTodos);
    }

    return (
        <div className="todoList">
            <input value={userInput} onChange={handleChange}/>
            <button onClick={AddTodoItem}>ADD</button>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} handleCheck={checkTodoItem} handleDelete={deleteTodoItem}/>)
            }
        </div>
    );
}

export default TodoList;
