
//Files we will use during the lab that will add functionality to the webpage or add data from other files to the main page
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//This function basically takes the Navbar component which is a stylised menu component and creates three webpages upon a singke-page application
// This is so when the user navigates from page to page it happens instantaneously and they can navigate from every page automatically.
// The Routes then take the path of the main page and the other pages such as create & read and inserts data from files Content, Header and Footer
// And then takes the data from all three files and outputs them to the console on the navigation pages

//Same method as last week's lab but replaced with a read & create component instead of Header & Footer
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
      </Routes>

      </div>
      </BrowserRouter>
  );
}

export default App;
