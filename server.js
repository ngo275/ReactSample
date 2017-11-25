const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/api/hoge', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }
  res.json({test: param});
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});