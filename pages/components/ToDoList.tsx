export async function getStaticProps() {
    return {
        props: {
            list: ['']
        }
    }
}

export default function ToDoList(props: { list: Array<string>; setList: (newArr: Array<string>) => void }) {
    return (
        <div className="todo-list">
            <ul>
                {props.list.map((text: string, indexMap) => {
                    return (
                        <li key={Math.random()}>
                            <div className={"todo-item"}>
                                <textarea
                                    defaultValue={text}
                                    onChange={(value) => props.list[indexMap] = value.target.value}
                                    maxLength={261}
                                    rows={3}>
                                </textarea>
                                <input type={'button'}
                                    value={'X'}
                                    onClick={() => {
                                        const arr = props.list.filter((v, indexFilter) => indexFilter !== indexMap)
                                        props.setList(arr)
                                    }}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}