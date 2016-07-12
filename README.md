# express-rdb

Middleware that connects to RethinkDB and sets `req.db`.

## Install

    $ npm install express-rdb

## Usage

```javascript
var r = require('rethinkdb');
var rdb = require('express-rdb');

app.get('/users/:id', rdb({ db: 'test' }), function (req, res) {
  r.table('users').get(req.params.id).run(req.db).then(user => res.send(user));
});
```

