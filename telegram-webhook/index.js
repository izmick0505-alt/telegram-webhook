const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Received Telegram message:', req.body);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Telegram Webhook Server is running!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
