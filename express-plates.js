var plates = require('plates');
var fs = require('fs');

function expressPlates(path, options, fn)
{
  var key, result, str;

  key = path + ':string';

  if ('function' === typeof options) {
    fn = options;
    options = {};
  }
  try {
    options.filename = path;
    if (options.cache) {
      str = exports.cache[key] || (exports.cache[key] = fs.readFileSync(path, 'utf8'));
    } else {
      str = fs.readFileSync(path, 'utf8');
    }
    result = plates.bind(str, options.data, options.map, fn);
    return fn(null, result);
  }
  catch (err) {
    return fn(err);
  }
}

expressPlates.init = function initF(app)
{
  app.engine('.html', expressPlates);
  app.set('view engine', 'html');
  return plates;
};

module.exports = expressPlates;
