const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const knex = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.API_PORT || 3001));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE");
  next();
});

app.get('/posts', (req, res) => {
  knex('posts').select('*').orderBy('created_at', 'desc')
    .then(posts => {
      res.json({ posts: posts });
    });
  }
);

app.post('/posts', (req, res) => {
  if (!req.body.text) {
    res.status(500).send('Something broke!');
    return;
  }

  knex('posts').insert({ text: req.body.text })
    .then(() => {
      res.status(202).end();
    });
  }
);

app.delete('/posts/:id', (req, res) => {
  knex('posts').where('id', req.params.id).del()
    .then(() => {
      res.status(202).end();
    });
  }
);


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
