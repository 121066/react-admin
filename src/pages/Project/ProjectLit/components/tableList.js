import { Table } from 'antd'
function TableList() {
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
    const data = []

    for (let i = 0; i < 20; i++) {
        let obj = {
            key: i,
            taskName: '派工任务' + i,
            authName: '奥林',
            crdate: '2023-10-07',
            status: i % 2 === 0 ? 1 : 2,
        }
        data.push(obj)
    }
    const onChange = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra)
    }
    return (
        <>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                ></Table>
            </div>
        </>
    )
}
export default TableList
