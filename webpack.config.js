const path = require('path');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
