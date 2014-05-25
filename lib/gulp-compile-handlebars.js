var es = require('event-stream');
var handlebars = require('handlebars');

module.exports = function (data, options) {
  return es.through(function (file) {
    if (file.isNull()) return this.emit('data', file);
    if (file.isStream()) return this.emit('error', new Error('gulp-compile-handlebars: Streaming not supported'));

    var body = file.contents.toString();
    var result;
    try {
      result = handlebars.compile(body)(data);
    } catch (e) {
      return this.emit('error', new Error(e));
    }
    file.contents = new Buffer(result);
    file.path = options.dest;
    return this.emit('data', file);
  });
};
