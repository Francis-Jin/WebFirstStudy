var path=require('path');

module.exports = {
    entry:[
        './js/index.js',
        './css/main.css',
        './img/logo.png'
    ],
    output:{
        filename:'index.build.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    "url-loader"
                ]
            }
        ]
    }

};

