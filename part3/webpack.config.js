const path = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')

module.exports ={
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        clean: true,
        /*
        不使用箭头函数
        * environment: {
            arrowFunction: false
        }
        * */

    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome":"88",
                                            "ie":'11'
                                        },
                                        "corejs":'3',
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.ts','.js']
    }
}
