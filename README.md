[![build status](https://secure.travis-ci.org/ArnaudRinquin/express-plates.png)](http://travis-ci.org/ArnaudRinquin/express-plates)
# express-plates

  This small piece of code allow you to simply use Flatiron's Plate template engine in within Express framework.

# Example - How to
Here is a simple example to render a /views/index.html

```js
app = require('express').createServer();
require('express-plates').init(app);

app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index', {
        data: {
            title: 'Plates is pretty cool, so is Express',
            content: 'It seems to work quiet well'
        }
    });
});

app.listen(8080);
```

# Detailed setup and options
## Maps
init(app) returns the plates object so you can retrieve it and use Map() easilly :

```js
var plates = require('express-plates').init(app);

// further in the app...

app.get('/', function(req, res) {
    var map = plates.Map();

    map.class('content').to('content');

    res.render('index', {
        data: {
            content: 'It seems to work quiet well'
        },
        map: map
    });
});
```

