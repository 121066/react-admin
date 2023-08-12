import { Button } from 'antd';
import { getFile } from '../../../api';
import { downLoad } from '../../../util';
function Chart() {
    const getDownLoad = async () => {
        let { fileName, data } = await getFile();
        downLoad(fileName, data);
    };
    const getFileData = async () => {
        // let { fileName, data } = await getFile();
        let { fileName, data } = await getFile();
        console.log(data, fileName);
    };
    return (
        <>
            <div>
                <Button type="primary" onClick={() => getDownLoad()}>
                    下载
                </Button>
                <Button type="primary" onClick={() => getFileData()}>
                    查询
                </Button>
            </div>
        </>
    );
}
export default Chart;
