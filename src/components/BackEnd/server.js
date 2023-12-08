//Instantiating express the framwork we are using,along with the port we will use when the GET, POST and requests are made on the server
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


//Building react static files using express framework
const path = require('path');
app.use(express.static(path.join(__dirname, 'build//static')));



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

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://g00377566:Skyfall007@cluster0.kkb2dnn.mongodb.net/');
}

const bookSchema = new mongoose.Schema({
    title:String,
    cover:String,
    author:String
    
});

const BookModel = mongoose.model("books", bookSchema);

app.put('/api/books/:id', async (req,res)=>{
    console.log("Updated: "+ req.params.id);
    let book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);
})

//Deleting a book from the database using a unique id of a book
app.delete('/api/books/:id', async (req, res) => {
    console.log("Deleted: "+req.params.id);
    let book = await BookModel.findByIdAndDelete(req.params.id);
    res.send(book);
})

//Get method that takes in an array of JSON values and outputs them onto the console using a request
app.get('/api/books', async (req,res) => {
    let books = await BookModel.find({});
    console.log(books);
    res.json(books);
  }
)

app.get('/api/books/:id', async (req, res)=> {
    console.log(req.params.id);
    let book = await BookModel.findById({_id:req.params.id});
    res.send(book);
    })

//POST method to output any new data input by the user in the clientside to the server side console
app.post('/api/books', (req, res)=> {
    console.log(req.body);

    BookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author,
    }).then(() => { res.send('Book recieved'); })
        .catch(() => { res.send('Book not recieved'); })

        })

//Handles any request that do not match file names or directories
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})