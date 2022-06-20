import React from 'react';
import './App.css';
import TodoList,{TaskType} from "./TodoList";


//CRUD
function App() {
    const title_1:string = "Hello title 1 ";
    const title_2:string = "Hello title 2";
    const title_3:string = "Hello title 3";

    const tasks_1: Array<TaskType> =[
        {id: 1,title:"HTML", isDone:true},
        {id: 2,title:"css", isDone:false},
        {id: 3,title:"js", isDone:true},
    ]
    const tasks_2: Array<TaskType> =[
        {id: 1,title:"SASS", isDone:true},
        {id: 2,title:"ANGULAR", isDone:false},
        {id: 3,title:"js", isDone:true},
    ]

    return (
        <div className="App">
            <TodoList title={title_1} tasks={tasks_1}/>
            <TodoList title={title_2} tasks={tasks_2}/>
            <TodoList title={title_3} tasks={tasks_1}/>
        </div>
    );
}

export default App;
