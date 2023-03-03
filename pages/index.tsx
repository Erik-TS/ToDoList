import { useState } from "react"
import ToDoList from "./components/ToDoList"

export default function Main() {

    const [taskList, setTasklist] = useState([{ id: Math.random(), text: '' }])

    function addTask(taskText: string) {
        let updated = [...taskList]
        updated.push({ id: Math.random(), text: taskText })
        setTasklist(updated)
    }

    function removeTask(id: number) {
        const updated = taskList.filter(v => v.id !== id)
        setTasklist(updated)
    }

    function updateTask(id: number, text: string) {
        let task = taskList.find(t => t.id == id)
        if (!!task) {
            task.text = text
            const updatedList = taskList.map(value => {
                if (value.id == task.id) return task
                else return value
            })
            console.table(updatedList)
            setTasklist(updatedList)
        }
    }

    return (
        <>
            <header>
                <h1>To Do List</h1>
            </header>
            <ToDoList tasks={taskList} update={updateTask} remove={removeTask} />
            <input
                className="add-item"
                type={'button'}
                value={'Add Item'}
                onClick={() => {
                    addTask('')
                }}
            />
        </>
    )
}