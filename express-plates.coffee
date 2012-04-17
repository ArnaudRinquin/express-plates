plates = require 'plates'
fs = require 'fs'

expressplates = () ->
    this.plates = plates;

expressplates.prototype =
    init: (app) ->
        app.engin '.html', this.renderFile
        app.set 'view engine', 'html'
        this.plates
    renderFile: (path, options, fn) ->
        
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

module.exports = new expressplates()