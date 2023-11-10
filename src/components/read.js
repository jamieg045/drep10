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
            //Replaced our URL with the serverside URL so we can access the data contained in our server via axios
            axios.get('http://localhost:4000/api/books')
            .then(
                (response)=>{
                    setData(response.data.Jamiebooks);
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