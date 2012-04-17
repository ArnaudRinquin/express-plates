var fs, plates, renderFile, __express;

plates = require('plates');

fs = require('fs');

module.exports.__express = __express = renderFile = function(path, options, fn) {
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
  } catch (err) {
    return fn(err);
  }
};

module.exports = function(app) {
  return app.engine('.html', renderFile);
};