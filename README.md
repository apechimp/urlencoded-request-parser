urlencoded-request-parser
=========================

[![Build Status][travis-image]][travis-url]

Express middleware which parses url encoded bodies via qs and exposes options to qs

Installation
============
[![npm install urlencoded-request-parser][npm-image]][npm-url]

Usage
=====

```javascript
var parseUrlencoded = require('urlencoded-request-parser');
var opts = { arrayLimit: 0 };

app.use(parseUrlencoded(opts));
```

Where `opts` are the ones used by [`qs`](https://github.com/hapijs/qs).

[npm-image]: https://nodei.co/npm/urlencoded-request-parser.png?downloads=true
[npm-url]: https://www.npmjs.org/package/urlencoded-request-parser
[travis-image]: https://travis-ci.org/apechimp/urlencoded-request-parser.svg
[travis-url]: https://travis-ci.org/apechimp/urlencoded-request-parser
