import { Space, Tag } from 'antd'
import { useContext } from 'react'
import {
    TasksContext,
    TasksDispatchContext,
} from '../../../../reducer/dictContext'
function ItemList({ onChangeTask, onDeleteTask }) {
    const tasks = useContext(TasksContext)

    return (
        <>
            <Space size={[0, 8]} wrap>
                {tasks.map((item) => (
                    <ItemText key={item.id} item={item}></ItemText>
                ))}
            </Space>
        </>
    )
}
function ItemText({ item }) {
    const dispatch = useContext(TasksDispatchContext)
    const handleDeletes = (e) => {
        dispatch({
            type: 'delete',
            id: item.id,
        })
    }
    return (
        <>
            <Tag color="magenta" onClick={handleDeletes}>
                {item.text}
            </Tag>
        </>
    )
}
export default ItemList
