const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Разрешение CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

// Маршрут для сохранения данных обратной связи
app.post('/api/feedback', (req, res) => {
  const { name, phoneNumber } = req.body;
  const feedback = new Feedback({ name, phoneNumber });
  feedback.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.json({ success: false, error: err.message }));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
