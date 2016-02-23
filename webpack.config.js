var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var pack = require('./package.json');
var port = JSON.stringify(JSON.parse(process.env.PORT || '8081'));
var HtmlWebpackPlugin = require('html-webpack-plugin');

var commonConfig, clientConfig, serverConfig;
var distPath = path.join(__dirname,'dist/public');
var production = process.argv.indexOf('-p') > -1 ;

var commonLoaders = [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel"
}, {
    test: /\.(png|jpe?g|gif)$/,
    loader: 'url?limit=800&name=asset/[name].[hash:4].[ext]'
},{
    test:/\.(ttf|eot|svg|woff2?)/,
    loader : 'file?name=asset/[name].[hash:4].[ext]'
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
        __DEV__: !production,
        __VERSION__: JSON.stringify(pack.version),
        'process.env': {
            NODE_ENV: JSON.stringify(production ? 'production' : 'development')
        }
    })
];

commonConfig = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        root: [path.join(__dirname, './src/common'),path.join(__dirname, './src/component')]
    }
}

clientConfig = {
    devServer:{
      port:port,
      host:'0.0.0.0'
    },
    devtool: "eval",
    debug: true,
    name: "browser",
    entry: {
        init:"./src/client/entry.js"
    },
    output: {
        path: distPath,
        filename: '[name].js'
    },
    postcss:[
        require('postcss-modules-local-by-default')
    ],
    module: {
        loaders: commonLoaders.concat([{
            test: /\.css$/,
            loader: "style!css"
        }, {test: /\.html$/, exclude: /node_modules/, loader: 'html'},{
            test: /\.scss$/,
            loader: 'style!css?importLoaders=1&localIdentName=[name]_[local]_[hash:base64:4]!postcss!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, "./node_modules/compass-mixins/lib")) + '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, "./src/assets"))
        }])
    },
    plugins: commonPlugins.concat([
        new HtmlWebpackPlugin({
            template:'./src/client/indexTpl.html',
            chunksSortMode:function(a,b){
                var tulp = ["vendor","common","init"] ;
                return -tulp.indexOf(a.names);
            },
            inject: 'body'
        })
    ])
}

serverConfig = {
    name: "server-side rendering",
    entry: "./src/server/page.js",
    target: "node",
    output: {
        path: distPath,
        filename: "./../page.generated.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: commonLoaders
    },
    plugins:commonPlugins
}

clientConfig = _.extend({},commonConfig,clientConfig);
serverConfig = _.extend({},commonConfig,serverConfig);

// var argvStr = process.argv.toString();
// if(argvStr.indexOf('webpack-dev-server') > 0){
//     module.exports = clientConfig;
// }else{
//     module.exports = [clientConfig,serverConfig];
// }
module.exports = clientConfig;
