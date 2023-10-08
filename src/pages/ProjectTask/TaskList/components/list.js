import { useContext } from 'react'
import { TasksContext } from '../../../../reducer/dictContext'
function TaskItem({ onChangeTask, onDeleteTask }) {
    const tasks = useContext(TasksContext)
    return (
        <>
            {tasks.map((item) => (
                <div key={item.id}>{item.text}</div>
            ))}
        </>
    )
}
export default TaskItem
