# express-plates

  This small piece of code allow you to simply use Flatiron's Plate template engine in within Express framework.

# Example

Ready to run examples can be found at [express-plates-examples](https://github.com/ArnaudRinquin/express-plates-example)

# How to
By default, .html views are associated to plates engine. The association is a one line code: `require('express-plates').init(app);`

Here is a more detailed example:


``` js
app = require('express')();
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

You may customize the express engine setting:

``` js
var express = = require('express');
var app = express();
var expressPlates = require('express-plates');

app.engine('.plate', expressPlates);

```

# Maps
You can require plates and use Map() easilly :

```js
var expressPlates = require('express-plates');
var plates = require('plates');

app.engine('.html', expressPlates);
app.set('views', __dirname + "/views");

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

