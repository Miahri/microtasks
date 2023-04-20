import React from "react";

export type TaskType = {
    taskId: number;
    title: string;
    isDone: boolean
}

type TasksPropsType = {
    title: string
    tasks: Array<TaskType>
    deleteHandler: (tasks: Array<TaskType>) => void
}

export const Tasks = (props: TasksPropsType) => {
    const deleteHandler = () => props.deleteHandler(props.tasks);

    let tasksForList;
    if (props.tasks.length === 0) {
        tasksForList = <span>There is no task</span>
    } else {
       tasksForList = props.tasks.map((t: TaskType) => {
           return(
               <li key={t.taskId}>
                   <input type="checkbox" checked={t.isDone}/>
                   <span>{t.title}</span>
               </li>
           )
       })
    }

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <ul>{tasksForList}</ul>
            </div>
            <button onClick={deleteHandler}>Delete all tasks</button>
        </div>
    )
}