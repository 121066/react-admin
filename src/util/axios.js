import axios from 'axios';
// const request = axios.create({
//     BaseUrl: '',
//     timeout: 2000,
// });
const request = axios;
request.interceptors.request.use((config) => {
    return config;
});
request.interceptors.response.use(
    (response) => {
        console.log(response);
        if (Object.keys(response['headers']).includes('content-disposition')) {
            const fileName = response['headers']['content-disposition']
                .split(';')[1]
                .split('filename=')[1];
            const res = {
                fileName: decodeURIComponent(fileName),
                data: response.data,
            };
            return res;
        }
        return response.data;
        // return response.data;
        // if (!Object.keys(response.headers).includes('report-download')) {
        //     if (Object.keys(response.headers).includes('content-disposition')) {
        //         const req = {
        //             fileName: response.headers['content-disposition'],
        //             data: response.data,
        //         };
        //         return req;
        //     }
        //     return response.data;
        // } else {
        //     const req = {
        //         fileName: response.headers['report-download'],
        //         data: response.data,
        //     };
        //     return req;
        // }
    },
    (err) => {
        return new Promise(err);
    },
);
export default request;
