import { useState } from "react";

export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");

    const addTask = () => {
        setTasks([...tasks, newTaskText]); 
        setNewTaskText(""); 
      };

    return <div>
        <input
        type="text"
        value={newTaskText} 
        onInput={(event) => setNewTaskText(event.target.value)} 
        placeholder="Введите текст нового пункта"
        />

        <button onClick={addTask}>Добавить</button>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
}