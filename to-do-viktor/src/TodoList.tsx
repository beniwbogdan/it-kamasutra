import React from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
type TodDoListProps = {
    title: string,
    tasks: TaskType[],
    removeTask: (taskId: number) => void, //if function nothing return
    changeFilter:(filter:FilterValuesType)=>void
}

const TodoList = (props: TodDoListProps) => {


    const tasksListItems = props.tasks.length ? props.tasks.map(task => {
        const removeTask = () => props.removeTask(task.id);
        return (<li>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        );
    }) : <span>List of tasks is empty</span>


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button onClick={() => {
                    return props.changeFilter("all");
                }}>All
                </button>
                <button onClick={() => {
                    return props.changeFilter("active");
                }}>Active
                </button>
                <button onClick={() => {
                    return props.changeFilter("completed");
                }}>Completed
                </button>
            </div>
        </div>
    );

};

export default TodoList;