var test = require('tape');
var servertest = require('servertest');
var parseUrlEncoded = require('.');
var http = require('http');

test('should parse and attach to req.body', function(t) {
  servertest(
    createServer({ arrayLimit: 0 }), 
    '/',
    { 
      method: 'POST',
      encoding: 'json', 
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
    },
    function(err, res) {
      t.ifError(err);
      t.equal(res.body.foo['96'], 'bar');
      t.end();
    }
  ).end('foo%5B96%5D=bar');
});

function createServer(opts){
  var _parser = parseUrlEncoded(opts)

  return http.createServer(function(req, res){
    _parser(req, res, function(err){
      res.statusCode = err ? (err.status || 500) : 200;
      res.end(err ? err.message : JSON.stringify(req.body));
    })
  })
}
