import Card from 'react-bootstrap/Card';

//Using React Bootstrap Cards, we read in the values from the array we instantiated in read.js and books.js
//And formats and reads it onto the webpage.
function BookItem(props)
{
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img src={props.myBook.cover}></Card.Img>
        <Card.Body>
          <Card.Title>{props.myBook.title}</Card.Title>
          <Card.Text>{props.myBook.author}</Card.Text>
        </Card.Body>
      </Card>
    );
    
}

export default BookItem;