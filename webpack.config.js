const path = require('path');

module.exports = {
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'site'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            }
        ]
    }
}