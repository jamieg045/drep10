import BookItem from './bookItem'

//The books function takes in a props value which we pass into our map function
//This also connects us to the bookItem component where we read in our values
function Books(props)
{
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id} Reload={()=>{props.ReloadData()}}></BookItem>
        }
    );
}

export default Books;