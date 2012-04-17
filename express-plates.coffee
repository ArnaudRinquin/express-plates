plates = require 'plates'
fs = require 'fs'

module.exports.__express = __express = renderFile = (path, options, fn) ->
    key = path + ':string'
    
    if 'function' == typeof options
        fn = options
        options = {}

    try
        options.filename = path
        if options.cache
            str = exports.cache[key] || (exports.cache[key] = fs.readFileSync path, 'utf8')
        else
            str = fs.readFileSync path, 'utf8'
        
        result = plates.bind str, options.data, options.map, fn
        fn null, result
    catch err
        fn err
        
module.exports = (app) ->
    app.engine '.html', renderFile