import React from 'react';
import {FilterValuesType} from './App';
import {TaskType} from "./Tasks";
import Input from "./Input"

type PropsType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    addBtn: (title: string) => void
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
    deleteHandler: (tasks: Array<TaskType>) => void
}

export function Todolist(props: PropsType) {
    let tasksForTodolist = props.tasks;
    const deleteHandler = () => {
        props.deleteHandler(props.tasks);
        props.changeFilter('none');
    }

    if (tasksForTodolist.length === 0) {
        props.changeFilter('none');
    } else if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist =tasksForTodolist.filter(t => t.isDone);
    }

    return <div>
        <h3>{props.title}</h3>
        <Input addBtnClick={props.addBtn}/>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button
                disabled={props.filter === "none"}
                className={props.filter === "all" ? "active-filter" : ""}
                onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button
                disabled={props.filter === "none"}
                className={props.filter === "active" ? "active-filter" : ""}
                onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button
                disabled={props.filter === "none"}
                className={props.filter === "completed" ? "active-filter" : ""}
                onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
            <button
                disabled={props.filter === "none"}
                onClick={ deleteHandler }>
                Delete all tasks
            </button>
        </div>
    </div>
}
