const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req, res) => {
    // res.send('And We are set-up!');
    res.sendFile(__dirname +"/index.html");
});

app.post('/', function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    res.send("Your answer is "+ (num1 + num2));
})

app.get('/bmicalculator', (req, res) => {
    // res.send('And We are set-up!');
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = (weight / Math.pow(height, 2)).toFixed(5);
    res.send("<h1>Your BMI is "+ result + "</h1>");
})


app.listen(port, () => {
    console.log(`Calculator app listening on port ${port}`);
});