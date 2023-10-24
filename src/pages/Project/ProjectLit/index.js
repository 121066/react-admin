import { useState } from 'react'
import AddTask from './components/addTask'
import FormSearch from './components/formSearch'
import TableList from './components/tableList'
import './index.scss'
function ProjectList(params) {
    const [dataList, setDataList] = useState({})

    return (
        <>
            <div>
                <FormSearch></FormSearch>
                <AddTask onAdd={setDataList}></AddTask>
                <TableList dataList={dataList}></TableList>
            </div>
        </>
    )
}
export default ProjectList
