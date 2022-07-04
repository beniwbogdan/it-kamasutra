import React, {useState} from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
type TodDoListProps = {
    title: string,
    tasks: TaskType[],
    removeTask: (taskId: string) => void, //if function nothing return
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

const TodoList = (props: TodDoListProps) => {
    let [title, setTitle] = useState("");

    const tasksListItems = props.tasks.length ? props.tasks.map(task => {
        const removeTask = () => props.removeTask(task.id);
        return (<li>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        );
    }) : <span>List of tasks is empty</span>

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value)
                    }}/>
                <button onClick={addTask

                }>+
                </button>
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