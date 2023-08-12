import { Layout } from 'antd';
import Contents from './Content';
import Headers from './Header';
import Side from './Side';
import './index.scss';
const { Header, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 54,
    paddingInline: 50,
    lineHeight: '54px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    backgroundColor: '#eee',
    padding: '12px',
};
const siderStyle = {
    textAlign: '',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
    with: '220px',
    maxWidth: '220px',
    minWidth: '220px',
};
function Layouts() {
    return (
        <div className="content">
            {/* <Header className="header"></Header>
            <div className="main">
                <Side></Side>
                <Contents></Contents>
            </div> */}
            <Layout>
                <Header style={headerStyle}>
                    <Headers></Headers>
                </Header>
                <Layout hasSider>
                    <Sider style={siderStyle}>
                        <Side></Side>
                    </Sider>
                    <Content style={contentStyle}>
                        <Contents></Contents>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
export default Layouts;
