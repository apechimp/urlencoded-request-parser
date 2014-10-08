urlencoded-request-parser
=========================

[![Build Status][travis-image]][travis-url]

Express middleware which parses url encoded bodies via qs and exposes options to qs

Installation
============
``npm install --save urlencoded-request-parser``

Usage
=====

```javascript
var parseUrlencoded = require('urlencoded-request-parser');
var opts = { arrayLimit: 0 };

app.use(parseUrlencoded(opts);
```

Where `opts` are the ones used by [`qs`](https://github.com/hapijs/qs).

[travis-image]: https://travis-ci.org/apechimp/urlencoded-request-parser.svg
[travis-url]: https://travis-ci.org/apechimp/urlencoded-request-parser
