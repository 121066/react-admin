const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://dbyxs.xyz:8002',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        }),
    )
}
