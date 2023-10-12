import { Table } from 'antd'
import { memo, useMemo, useState } from 'react'
function TableList(props) {
    const { dataList } = props
    const status = {
        1: '未开始',
        2: '已完成',
    }
    const columns = [
        { title: '任务名称', dataIndex: 'taskName' },
        {
            title: '状态',
            dataIndex: 'status',
            render: (e) => {
                return <span>{status[e]}</span>
            },
        },
        { title: '责任人', dataIndex: 'authName' },
        { title: '创建时间', dataIndex: 'crdate' },
    ]
    const [data, setData] = useState({})
    const list = useMemo(() => {
        return props.dataList
    }, [props.dataList])
    let arr = []
    for (let i = 0; i < 5; i++) {
        let obj = {
            key: i,
            taskName: '派工任务' + i,
            authName: '奥林',
            crdate: '2023-10-07',
            status: i % 2 === 0 ? 1 : 2,
        }
        arr.push(obj)
    }
    // setData(list)
    // data.push(list)
    const onChange = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra)
    }
    return (
        <>
            <div>
                <Table
                    columns={columns}
                    dataSource={[...arr]}
                    onChange={onChange}
                ></Table>
            </div>
        </>
    )
}
export default memo(TableList)
