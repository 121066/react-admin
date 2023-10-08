import { useReducer, useState } from 'react'
// import { useState } from 'react'
import { Button } from 'antd'
import {
    TasksContext,
    TasksDispatchContext,
} from '../../../reducer/dictContext'
import TaskItem from './components/list'
import dictReducer from './dict'
export default function TaskList() {
    const initialTasks = [
        { id: 1, text: '部门', flag: false },
        { id: 2, text: '小组', flag: false },
    ]
    const [count, setCount] = useState(3)
    const [tasks, dispatch] = useReducer(dictReducer, initialTasks)
    const handleAddTask = () => {
        // setCount(count+1)
        dispatch({
            type: 'add',
            id: setCount((e) => e++),
            text: '添加',
        })
    }
    const handleDelete = (text = { id: 2, text: '小组', flag: false }) => {
        dispatch({
            type: 'delete',
            item: text,
            id: 2,
        })
    }
    return (
        <>
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    <div>项目列表</div>
                    <div>
                        <TaskItem tasks={tasks}></TaskItem>
                    </div>
                    <Button onClick={handleAddTask} type="primary">
                        添加
                    </Button>
                    <Button type="primary" onClick={handleDelete}>
                        删除
                    </Button>
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    )
}
