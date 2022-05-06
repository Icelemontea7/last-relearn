const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

module.exports={
    
    entry:{
        main:'./src/js/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        esModule:false,
                        name:'[name][hash:4].[ext]',
                        outputPath:'images/',
                        // publicPath:'./img',
                        limit:1024*100
                    }
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{
                    esModule:false
                }
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(eot|woff2|ttf|woff)$/,
                use:'file-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns:"usage",
                                    corejs:3
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{

    }
}