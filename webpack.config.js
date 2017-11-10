const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "dist/styles/app.bundle.css"
});

module.exports = {
    entry: {
        main: './src/scripts/index.js'
    },
    output: {
        filename: './dist/scripts/index.js'
    },
    devtool: 'source-map', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename:'dist/styles/index.css', allChunks: true})
    ]
}