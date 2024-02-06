import React from "react";


const TaskItem = ({ task }) => {
    console.log(task, `task`)
    return <li>{task.Title}</li>
}


export default TaskItem