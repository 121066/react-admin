import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { router } from '../../router';
function Side() {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key);
    };
    const key = window.location.pathname;
    return (
        <>
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[key]}
                    defaultOpenKeys={[key]}
                    items={router}
                    onClick={onClick}
                ></Menu>
            </div>
        </>
    );
}
export default Side;
