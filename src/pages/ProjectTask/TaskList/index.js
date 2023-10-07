import { useReducer } from 'react'
// import dictReducer from './dict'

export default function TaskList() {
    const initialTasks = [
        { id: 1, text: '部门', flag: false },
        { id: 2, text: '小组', flag: false },
    ]
    const [tasks, dispatch] = useReducer(() => {}, [{ a: 1 }])

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
