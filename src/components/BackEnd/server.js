//Instantiating express the framwork we are using,along with the port we will use when the GET, POST and requests are made on the server
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//Bodyparser helps us parse over the POST method and add the data to output to the user
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Instantiation to avoid CORS error while reading JSON data from Node/Express server
const cors = require('cors');

app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


//Bodyparser helps us parse over the POST method and add the data to output to the user
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//Get method that takes in an array of JSON values and outputs them onto the console using a request
app.get('/api/books', (req,res) => {
    const myBook = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ]
            res.json({
                Jamiebooks:myBook
            })
        }
)

//POST method to output any new data input by the user in the clientside to the server side console
app.post('/api/books', (req, res)=> {
    console.log(req.body);
    res.send("Data Recieved");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})