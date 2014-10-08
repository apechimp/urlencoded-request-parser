var getRawBody = require('raw-body');
var typer = require('media-typer');
var typeIs = require('type-is');
var qs = require('qs');

module.exports = function(opts) {
  return function (req, res, next) {
    if (!typeIs(req, 'urlencoded')) { return next(); }

    getRawBody(req, {
      length: req.headers['content-length'],
      limit: '1mb',
      encoding: typer.parse(req.headers['content-type']).parameters.charset
    }, function (err, string) {
      if (err) { return next(err) }

      try {
        req.body = qs.parse(string.toString(), opts);
        next();
      }
      catch (err) {
        next(err);
      }
    });
  }
};
