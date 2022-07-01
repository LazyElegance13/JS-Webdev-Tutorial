const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/contact', (req, res) => {
    res.send('Contact me at lazylucifer@yahoo.com')
})

app.get('/about', (req, res) => {
    res.send('My name is Lazy Lucifer, an amatuer programmer.')
})

app.listen(port, () => {
    console.log('Example app listening on port $(port)');
});
