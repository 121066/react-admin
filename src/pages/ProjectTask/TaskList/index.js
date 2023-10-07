import { useReducer } from 'react'
// import { useState } from 'react'
import dictReducer from './dict'
export default function TaskList() {
    const initialTasks = [
        { id: 1, text: '部门', flag: false },
        { id: 2, text: '小组', flag: false },
    ]
    // const [count, setCount] = useState(0)
    const [tasks, dispatch] = useReducer(dictReducer, initialTasks)
    console.log(tasks, 'tasks')
    const handleAddTask = () => {
        dispatch({
            type: 'added',
            id: 5,
            text: '添加',
        })
    }
    return (
        <>
            <div>项目列表</div>
            {/* <Button onClick={handleAddTask} type="primary">
                添加
            </Button> */}
        </>
    )
}
