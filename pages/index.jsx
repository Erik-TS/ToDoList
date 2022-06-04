import { useEffect, useState } from "react"
import ToDoList from "./components/ToDoList"

function Main(props){
    
    const [list, setList] = useState( [''] )

    return(
        <>
            <header>
                <h1>To Do List</h1>
            </header>
            <ToDoList list={list} setList={setList} />
            <input className="add-item" type={'button'} value={'Add Item'} onClick={() => {
                setList([...list, ''])
            }}
            onMouseDown={() => {
                document.querySelector('.add-item').style.backgroundColor = 'blue'
            }}
            onMouseUp={() =>{
                document.querySelector('.add-item').style.backgroundColor = '#82954B'
            }} />
        </>
    )
}

export default Main