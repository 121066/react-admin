import request from '../util/axios';
/**
 *  下载文件流
 */
export function getFile(params) {
    return request({
        url: 'http://127.0.0.1:8080/file',
        method: 'get',
        params,
        responseType: 'blob',
    });
}
