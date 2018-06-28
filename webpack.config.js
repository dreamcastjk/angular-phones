"use strict";

const path = require('path');

module.exports = {

    mode: "production",
    entry: './app.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'public/js')
    },
    devtool: "source-map",
    watch: false

};





















