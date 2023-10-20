import Books from './books'
import {useEffect, useState} from 'react';
import axios from 'axios';


//We added useEffect and useState imports from React
//These imports allow us to connect a component with an external component along with axios
//We use these components to call the data on jsonblob and output it onto the webpage         
function Read()
{
    const [books, setData] = useState([]);

    useEffect(
        (
        )=>{
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response)=>{
                    setData(response.data.books);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    return (
    <div>
        <h3>These are your Books!</h3>
        <Books myBooks={books}></Books>
    </div>
    );
}

export default Read;