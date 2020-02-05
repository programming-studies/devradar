const express = require('express');

const { PORT = '3000' } = process.env
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    /**/
    return res.send('Hello World');
    /*/
    return res.send('Hello World 2asdaushd');
    /**/
});

app.listen(PORT, HOST);