import React from "react";
import useFetchTasks from "./fetchTasks";
import TaskItem from "./taskItem";

import './taskList.css'

const TaskLists = () => {

    const { tasks, loading, error } = useFetchTasks()

    if (loading) return <div>loading ....</div>
    if (error) return <div>error ....</div>


    return (
        <div>
            {console.log(`(tasks.length)`, tasks)}
            <div className="candidate-table-container">
                <table className="candidate-table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>description</th>
                            <th>status</th>
                            <th>priority</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {tasks?.map(task => (
                            <tr key={task.id}>
                                <tb>{task.Title}</tb>
                                <tb>{task.Description}</tb>
                                <tb>{task.Status}</tb>
                                <tb>{task.Priority}</tb>

                            </tr>
                        ))}
                    </tbody>




                </table>
            </div>
        </div>
    )
}

export default TaskLists