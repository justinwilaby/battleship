module.exports = {
    entry: './src/js/index.js',
    output: {
        path: './dist',
        filename: 'battleship.bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: './node_modules/',
                query: {
                    presets: ['latest'],
                    plugins: [
                        "transform-object-rest-spread",
                        ["transform-class-properties", {"spec": true}],
                        "transform-decorators-legacy"
                    ],
                }
            }
        ]
    }
};