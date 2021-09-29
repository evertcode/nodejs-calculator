const express = require('express');
const path = require('path');

const router = express.Router();
const app = express();

const PORT = proccess.env.PORT || 13000;

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/', router);
app.listening(PORT, () => {
  console.log('Server running...');
});
