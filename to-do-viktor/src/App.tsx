import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import { v1 } from 'uuid';


export type FilterValuesType="all" | "active" | "completed";
//CRUD
function App() {
    const title_1: string = "Hello title 1 ";
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "css", isDone: false},
        {id: v1(), title: "js", isDone: true},
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
    const removeTask = (taskId: string):void => {
        setTasks(tasks.filter((task:TaskType) => task.id !== taskId));
    }

    const addTask=(title: string)=>{
        const newTask: TaskType={
            id:v1(),
            title:title,
            isDone:false
        }
        const updatedTask = [newTask, ...tasks];
        setTasks(updatedTask)
    }

const changeFilter=(filter: FilterValuesType)=>{
        setFilter(filter);
}
    return (
        <div className="App">
            <TodoList addTask={addTask} changeFilter={changeFilter}  removeTask={removeTask} title={title_1} tasks={tasksForRender}/>
        </div>
    );
}

export default App;
