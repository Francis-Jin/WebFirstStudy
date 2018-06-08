
let path =require('path');

module.exports = {
    entry:'./js/index.js',
    output:{
        filename:'build.js',
        path: path.resolve(__dirname,'dist')
    }
};