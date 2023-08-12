import { AreaChartOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import './index.scss';
function HeaderTop(params) {
    const list = [
        {
            id: 1,
            name: '待处理',
            icon: <AreaChartOutlined style={{ color: 'red' }} />,
            total: 9,
        },
        {
            id: 2,
            name: '处理中',
            icon: <AreaChartOutlined style={{ color: 'orange' }} />,
            total: 9,
        },
        {
            id: 3,
            name: '已完成',
            icon: <AreaChartOutlined style={{ color: 'blue' }} />,
            total: 9,
        },
    ];
    return (
        <div className="header_t">
            <div className="title">
                <span>待我处理</span>
                <span>更多</span>
            </div>
            <div className="list">
                {list.map((item, index) => {
                    return (
                        <div className="list_item" key={index}>
                            <div className="list_item_icon">
                                <Space>{item.icon}</Space>
                            </div>
                            <div className="list_item_title">
                                <span>{item.total}</span>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default HeaderTop;
