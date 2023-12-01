import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//Using React Bootstrap Cards, we read in the values from the array we instantiated in read.js and books.js
//And formats and reads it onto the webpage.
function BookItem(props)
{
    return (
      <div>
        <Card>
        <Card.Header>{props.myBook.title}</Card.Header>
        <Card.Body>
          <blockquote className='blockquote mb-0'>
            <img src={props.myBook.cover}></img>
            <footer>
              {props.myBook.author}
            </footer>
          </blockquote>
        </Card.Body>
        <Link to={'/edit/'+props.myBook._id} className='btn btn-primary'>Edit</Link>
        <Button variant="danger" onClick={(e) => {
          axios.delete('http://localhost:4000/api/books/' + props.myBook._id)
          .then((res)=>{
            let reload = props.Reload();
          })
          .catch();
        }}>Delete</Button>
        <br></br>
        <br></br>
      </Card>
      </div>
    );
    
}

export default BookItem;