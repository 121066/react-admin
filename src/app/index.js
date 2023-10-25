var http = require('express')
var app = http()
var cors = require('cors')
var body = require('body-parser')
app.use(cors())
const fs = require('fs') // 引入自带fs模块读取文件操作
const proxy = require('http-proxy-middleware').createProxyMiddleware
app.all('*', function (req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header(
    //     "Conent-Type",
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    //   );
    next()
})
app.use(body.urlencoded({ extended: false }))
app.use(body.json())
app.use('/', proxy(`/api`, { target: `https://dbyxs.xyz:8002/goods` }))
app.get('/file', (req, res) => {
    let fileName = './任务模板.xlsx' // 文件地址随意這里先写死
    let name = encodeURIComponent(fileName.split('.')[1])
    res.writeHead(200, {
        'Content-Type':
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment;filename=${name}.xlsx`,
        // "Access-Control-Expose-Headers": "Authorization",
        'Access-Control-Expose-Headers': 'Content-Disposition',
    })
    //创建可读流
    let readStream = fs.createReadStream(fileName)
    readStream.on('data', (chunk) => {}) //开始读取数据
    readStream.on('close', (res) => {}) //处理完成
    readStream.pipe(res) //  返回文件流
})
app.post('/goods', (req, res) => {
    res.json({
        data: '你好',
    })
    let obj = { name: '你好' }
    fs.writeFile('./index1.txt', JSON.stringify(obj, null, 2), function (e) {
        console.log(e)
    })
})
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080启动了')
})
