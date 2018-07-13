module.exports = {

    // define entry point, in this case script-1.js, because we import all modules into this file
    
     entry: './Resources/js/script-1.js',
    
    // define output point
    
     output: {
          path: 'Resources/dist',
          filename: 'bundle.js',
          libraryTarget: 'var',
          library: 'ui'
        },
    
     module: {
        loader: [
    {
    test: /\.js$/, // select all JS files
    exclude: /(node_modules)/, // ignore node modules
    loader: 'babel-loader',
    query: {
        presets: ['es2015'] // compiles ES6
        }
    }
        ]
    }
    
    };