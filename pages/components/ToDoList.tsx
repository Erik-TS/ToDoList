export async function getStaticProps() {
    return {
        props: {
            tasks: [{ id: Math.random(), text: '' }],
        }
    }
}

export default function ToDoList(props: {
    tasks: Array<{ id: number, text: string }>,
    remove: (id: number) => void,
    update: (id: number, text: string) => void
}) {
    return (
        <div className="todo-list">
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <div className={"todo-item"}>
                                <textarea
                                    defaultValue={task.text}
                                    onChange={(value) => { props.update(task.id, value.target.value) }}
                                    maxLength={261}
                                    rows={3}>
                                </textarea>
                                <input
                                    type={'button'}
                                    value={'X'}
                                    onClick={() => { props.remove(task.id) }}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}