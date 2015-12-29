var webpack = require('webpack'),
    port = 8080;

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        'path': '.',
        'filename': 'app.js',
        'publicPath': '/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
        ,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    devtool: 'source-map',
    devServer: {
        port: port,
        info: false,
        historyApiFallback: true,
        hot: true,
        contentBase: './',
        host: 'localhost'
    }
};
