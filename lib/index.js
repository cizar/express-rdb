var r = require('rethinkdb');

module.exports = function (opts) {
  opts = opts || {};
  opts.propName = opts.propName || 'db';
  return function (req, res, next) {
    res.on('finish', function () {
      req[opts.propName].close();
    });
    r.connect(opts, function (err, conn) {
      req[opts.propName] = conn;
      next(err);
    });
  };
};

