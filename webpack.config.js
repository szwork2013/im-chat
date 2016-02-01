var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var pack = require('./package.json');
var port = JSON.stringify(JSON.parse(process.env.PORT || '8081'));

var clientConfig, serverConfig;

var assetsPath = path.join(__dirname, 'server', "public", "assets");
var publicPath = "assets/";

var commonLoaders = [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel"
}, {
    test: /\.(png|jpe?g|gif)$/,
    loader: 'url?limit=800&name=images/[name].[hash:4].[ext]'
}];

var commonPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        '_': 'lodash',
        'window._': 'lodash'
    }),
    //定义自由变量 development production
    new webpack.DefinePlugin({
        __DEV__: true,
        __VERSION__: JSON.stringify(pack.version),
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    })
];

clientConfig = {
    name: "browser",
    entry: "./app/entry.js",
    output: {
        path: assetsPath,
        filename: "[hash:8].js",
        publicPath: publicPath
    },
    module: {
        loaders: commonLoaders.concat([{
            test: /\.css$/,
            loader: "style!css"
        }, ])
    },
    plugins: [
        function(compiler) {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(path.join(__dirname, "server", "stats.generated.json"), JSON.stringify(stats.toJson()));
            });
        }
    ]
}

serverConfig = {
    name: "server-side rendering",
    entry: "./server/page.js",
    target: "node",
    output: {
        path: assetsPath,
        filename: "../../page.generated.js",
        publicPath: publicPath,
        libraryTarget: "commonjs2"
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
        loaders: commonLoaders
    }
}

module.exports = [
    clientConfig, serverConfig
];
