import { Button } from 'antd';
import './index.scss';
function Headers(params) {
    return (
        <>
            <div className="header">
                <div className="header_left">管理系统</div>
                <div className="header_right">
                    <Button>退出</Button>
                </div>
            </div>
        </>
    );
}
export default Headers;
