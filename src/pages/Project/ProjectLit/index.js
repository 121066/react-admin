// import { getGoodslist } from '@/api'
import { useEffect, useRef, useState } from 'react'

import { Button } from 'antd'
import AddTask from './components/addTask'
import FormSearch from './components/formSearch'
import TableList from './components/tableList'
import './index.scss'
function ProjectList(params) {
    const [dataList, setDataList] = useState({})
    // console.log(params)
    const formSearch = useRef(null)
    useEffect(() => {
        const getList = async () => {
            // let data = await getGoodslist()
            // console.log(data, 'data')
            console.log(formSearch, 'formSearch')
        }
        getList()
    })
    const addBtn = () => {
        // console.log(formSearch.current)
        formSearch.current.init()
        const from = formSearch.current.form.submit()
        console.log(from, 'from')
    }
    function addClickBtn(e) {
        console.log('来了')
    }
    return (
        <>
            <div>
                <FormSearch ref={formSearch}></FormSearch>
                <AddTask onAdd={setDataList}></AddTask>
                <TableList dataList={dataList}></TableList>
                <Button onClick={addBtn}>点击</Button>
                <Button onClick={() => addBtn()}>函数</Button>
            </div>
        </>
    )
}
export default ProjectList
