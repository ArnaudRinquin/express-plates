express = require 'express'
app = express.createServer()
plates = require('express-plate').init()

app.set 'view engine', 'html'
app.set 'views', __dirname + '/views'

app.get '/', (req, res) ->
    map = plates.Map()

    map.class('content').to('content')
    map.where('id').is('title').to('title')
    map.where('data-content').is('name').to('name')

    res.render 'simple',
        data:
            title: 'Plates is pretty cool, so is Express'
            name: 'Express-Plate user'
            content: 'It seems to work quiet well'
        map: map


app.listen(8080);