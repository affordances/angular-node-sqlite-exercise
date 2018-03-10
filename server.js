const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let posts = [];

app.set('port', (process.env.API_PORT || 3001));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/posts', (req, res) => {
    res.json({ posts: posts });
  }
);

app.post('/posts', (req, res) => {
    posts.push({timestamp: new Date(), postBody: req.body.postBody});
    res.status(202).end();
  }
);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
