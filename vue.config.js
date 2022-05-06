const path = require('path');
module.exports = {
    // 基本路径
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        host: process.env.DEV_SERVER_HOST,
        public: process.env.DEV_SERVER_PUBLIC,
        disableHostCheck: Boolean(process.env.DEV_SERVER_DISABLE_HOST_CHECK),
        port: process.env.DEV_SERVER_PORT,
        open: true,
        compress: true,
        proxy: {
            [process.env.VUE_APP_API_PREFIX]: {
                target: process.env.API_PROXY_TARGET,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/assets/style/less/variable.less')],
        },
    },
};