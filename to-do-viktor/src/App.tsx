import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


export type FilterValuesType="all" | "active" | "completed";
//CRUD
function App() {
    const title_1: string = "Hello title 1 ";
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "css", isDone: false},
        {id: 3, title: "js", isDone: true},
    ]);
    const changeOnAll = () => {
        return "all";
    }
    const changeOnActive = () => {

    }
    const changeOnCompleted = () => {

    }
    let [filter, setFilter] = useState<FilterValuesType>("all");
    let tasksForRender;

    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(t => t.isDone);
            break;
        case "active":
            tasksForRender = tasks.filter(t => !t.isDone);
            break;
        default:
            tasksForRender = tasks;
            break;
    }
    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

const changeFilter=(filter: FilterValuesType)=>{
        setFilter(filter);
}
    return (
        <div className="App">
            <TodoList changeFilter={changeFilter}  removeTask={removeTask} title={title_1} tasks={tasksForRender}/>
        </div>
    );
}

export default App;
