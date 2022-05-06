const commonConfig=require('./webpack.config')
const { merge}=require('webpack-merge')


const devConfig={
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}

module.exports=merge(commonConfig,devConfig)