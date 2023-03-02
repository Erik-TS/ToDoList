import { useState } from "react"
import ToDoList from "./components/ToDoList"

export default function Main() {

    const [list, setList] = useState([''])

    return (
        <>
            <header>
                <h1>To Do List</h1>
            </header>
            <ToDoList list={list} setList={setList} />
            <input
                className="add-item"
                type={'button'}
                value={'Add Item'}
                onClick={() => setList([...list, ''])}
                onMouseDown={() => {
                    (document.querySelector('.add-item') as HTMLInputElement).style.backgroundColor = 'blue'
                }}
                onMouseUp={() => {
                    (document.querySelector('.add-item') as HTMLInputElement).style.backgroundColor = '#82954B'
                }}
            />
        </>
    )
}