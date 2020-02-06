const express = require('express');
const mongoose = require('mongoose');

const { PORT = '3000' } = process.env
const HOST = '0.0.0.0';

const app = express();

mongoose.connect('mongodb+srv://usu_omnistack:pwd_omnistack@fish-xxoc1.mongodb.net/omnistack-10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(express.json());


app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(PORT, HOST);