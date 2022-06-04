function ToDoList(props){

    return(
        <div className="todo-list">
            <ul>
                {props.list.map( (value, index) => {
                    return (
                        <li key={Math.random()}>
                            <div className={"todo-item"}>
                                <textarea defaultValue={value}
                                onChange={(value) => props.list[index] = value.target.value} 
                                maxLength={'261'}
                                rows={'3'}></textarea>
                                <input type={'button'} 
                                value={'X'} 
                                onClick={ () => {
                                    const arr = props.list.filter((valueE, indexE) => {
                                        return indexE !== index
                                    })
                                    props.setList(arr)
                                }} />
                            </div>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default ToDoList