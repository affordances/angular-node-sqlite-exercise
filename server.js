const express = require('express');
const app = express();

const messages = [{ messageId: 1, messageBody: 'a message' },
                  { messageId: 2, messageBody: 'another message' },
                  { messageId: 3, messageBody: 'yet another message' }];

app.set('port', (process.env.API_PORT || 3001));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/messages', (req, res) => {
    res.json({ messages: messages });
  }
);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
