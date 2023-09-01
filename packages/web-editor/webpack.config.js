const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: "source-map", //
    entry: {
        index: path.resolve( __dirname, './src/index.ts'),
        'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
        'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker.js',
        // 'flink.worker': '@antlr-ts/monaco-languages/lib/languages/flink/flink.worker.js',
    },
    output: {
        globalObject: 'self',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        alias: {},
		fallback: {
            fs: false,
            path: false,
            assert: false,
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new webpack.DefinePlugin({ // webpack自带该插件，无需单独安装
            // 'process.env' :  process.env // 将属性转化为全局变量，让代码中可以正常访问
            'process.env.NODE_DEBUG': process.env.NODE_DEBUG,
        })
    ],
    devServer: {
        hot: true, // 开启服务器的模块热替换
        host: "0.0.0.0",
        port: 8080,
        progress: false,
    }
}
