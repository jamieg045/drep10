import { useState } from "react";

//Added functionality to the create function made last week
//Added functionality to take in three values title, cover, author
// Also added handleSubmit so that when the user clicks on add book, the callback function is only called once and is not repeated infinitely.

function Create() {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Title: "+title);
        console.log("Cover URL: "+cover);
        console.log("Author: "+author);
    }

    //Our return method that takes in a form
    //We have three labels that take in values inputted by the user, adds them into the create function and outputs them onto the console.
    // We have another div element that takes a submit input type which handles the connection for this functionality
    return (
        <div>
            <h3>Add a Book!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Image URL: </label>
                    <input type="url"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;