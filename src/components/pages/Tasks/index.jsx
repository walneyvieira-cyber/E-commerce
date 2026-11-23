import { useEffect, useState } from "react"
import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../molecules/TaskForm/index.jsx"
import TaskCounter from "../../atoms/TaskCounter.jsx"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    // HOOKS - useState com inicializador lazy do localStorage:
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem("tasks")
            return savedTasks ? JSON.parse(savedTasks) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        } catch (e) {
            console.error("Erro ao salvar tarefas no localStorage:", e)
        }
    }, [tasks])

    return(
        <PageDefault>
            <SectionDefault className={styleTasks.sectionTasks}>
                <h1>Gerenciamento de Tarefas</h1>
                <TaskForm tasks={tasks} setTasks={setTasks} />
                <TaskCounter tasks={tasks} />
                <TaskList tasks={tasks} setTasks={setTasks} style={styleTasks} />
            </SectionDefault>
        </PageDefault>
    )
}

export default Tasks
