(function() {
  var expressplates, fs, plates;

  plates = require('plates');

  fs = require('fs');

  expressplates = function() {
    return this.plates = plates;
  };

  expressplates.prototype = {
    init: function(app) {
      app.engin('.html', this.renderFile);
      app.set('view engine', 'html');
      return this.plates;
    },
    renderFile: function(path, options, fn) {
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
    }
  };

  module.exports = new expressplates();

}).call(this);
