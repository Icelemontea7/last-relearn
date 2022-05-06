const commonConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


const prodConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/main[hash:4].css'
        })
    ],
    optimization: {
        minimizer: [
            //压缩js代码
            new TerserPlugin(),
            //压缩css代码
            new OptimizeCssAssetsWebpackPlugin()
        ],
        // splitChunks:{
        //     chunks:'all',
        //     cacheGroups:{
        //         vendor:{
        //             name:'vendor',
        //             priority:1,
        //             test:/node_modules/,
        //             minSize:1,
        //             minChunks:1
        //         },
        //         common:{
        //             name:'common',
        //             priority:0,
        //             minSize:1,
        //             minChunks:1
        //         }
        //     },
        // }
    }
}

module.exports = merge(commonConfig, prodConfig)