import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { router } from '../../router';
function Side() {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key);
    };
    const key = window.location.pathname;
    const siderStyle = {
        textAlign: '',

        backgroundColor: '#fff',
        with: '220px',
        maxWidth: '220px',
        minWidth: '220px',
    };
    return (
        <>
            <div>
                <Menu
                    style={siderStyle}
                    mode="inline"
                    selectable={true}
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
