const TaskItem = ({ task, tasks, setTasks, style })=>{

    function attStatusTasks (){
        const tasksUpdated = tasks.map(t =>{
            return t.id === task.id ?
                {...t, status: !t.status}: t
        })

        setTasks(tasksUpdated)
    }

    function deleteTask(){
        const tasksUpdated = tasks.filter(t => t.id !== task.id)
        setTasks(tasksUpdated)
    }

    const taskId = `task-${task.id}`

    return(
        <li className={style?.itemTask || ""}>
            <div className={style?.itemContent || ""}>
                <input
                    id={taskId} 
                    type="checkbox" 
                    name="task"
                    checked={task.status}
                    onChange={attStatusTasks} 
                />
                <label
                    htmlFor={taskId}
                    style={{
                        textDecoration:
                            task.status ? "line-through":"none",
                        cursor: "pointer",
                        fontWeight: task.status ? "900":"400"
                    }}
                >
                    {task.text}
                </label>
            </div>
            <button
                type="button"
                onClick={deleteTask} 
                className={style?.btnItem || ""}
            >Remover</button>
        </li>
    )
}

export default TaskItem
