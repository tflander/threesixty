const path = require('path');

module.exports = {
    mode: 'development',
    entry: './views/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    }
};