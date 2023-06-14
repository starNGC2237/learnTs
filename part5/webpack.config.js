const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        clean: true,
        environment: {
            arrowFunction: false,
            const: false
        }


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
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.ts','.js']
    }
}
