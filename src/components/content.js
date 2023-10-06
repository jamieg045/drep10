
//Function that takes an argument and outputs two lines to the console
//This function is then called upon in App.js to show it's content via Routing
function Content() {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;