const webpack = require('webpack');
module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: "./app/app.jsx",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    // watch: true,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader?cacheDirectory=true",
                // loader: "babel-loader",
                options: {
                    presets: ["react", "es2015", 'stage-0']
                }
            }
        }, ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // }
}