
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production' ? '/xueiq/' : '/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue({ file }) {
                            return file.indexOf('vant') !== -1 ? 37.5 : 37.5;
                        },
                        propList: ['*']
                    })
                ]
            }
        }
    }
};