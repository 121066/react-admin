import { useReducer, useState } from 'react'
// import { useState } from 'react'
import { Button, Input } from 'antd'
import {
    TasksContext,
    TasksDispatchContext,
} from '../../../reducer/dictContext'
import ItemList from './components/itemList'
import TaskItem from './components/list'
import dictReducer from './dict'
import './index.scss'
export default function TaskList() {
    const initialTasks = [
        { id: 1, text: '部门', flag: false },
        { id: 2, text: '小组', flag: false },
    ]
    const [count, setCount] = useState(4)
    const [tasks, dispatch] = useReducer(dictReducer, initialTasks)
    const [intdet, setIntdet] = useState('')
    const handleAddTask = () => {
        setCount(count + 1)
        dispatch({
            type: 'add',
            id: count,
            text: intdet,
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
                        <TaskItem></TaskItem>
                    </div>
                    ----------
                    <div>
                        <ItemList></ItemList>
                    </div>
                    <Input
                        className="m8"
                        value={intdet}
                        onChange={(e) => setIntdet(e.target.value)}
                        placeholder="请输入"
                    ></Input>
                    <Button
                        className="m8 p4"
                        onClick={handleAddTask}
                        type="primary"
                    >
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
