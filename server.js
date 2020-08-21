const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(express.json());

//Weather API
const apiKey = 'c39ff8abe8005664cdfc8a8b6feda282';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

router.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
});

router.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  request(url, function (err, response, body) {
    if(err){
      return res.render('index', {weather: null, error: 'Error, please try again'});
    }
    let weather = JSON.parse(body);
    if(weather.current == undefined){
      return res.render('index', {weather: null, error: 'Error, please try again'});
    }
    let weatherText = `Det är ${weather.current.temperature} grader ${weather.current.is_day === "yes" ? 'dagtid' : 'nattetid'} i ${weather.location.name}!`;
    res.render('index', {weather: weatherText, error: null});
  });
});


// Mitt lilla API
app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

const courses = [
    { id: 1, name: 'Kurs 1'},
    { id: 2, name: 'Kurs 2'},
    { id: 3, name: 'Kurs 3'},
]

app.get('/api/courses', (req, res) => {
        res.send(courses)
      })
    
    //Skapa en ny kurs
    app.post('/api/courses', (req, res) => { 
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        //push it in the array
        courses.push(course)
        //the server puts the response in the body
        res.send(course)
    })  
    
