import './App.css';
import {Nav , Navbar} from 'react-bootstrap';
import {Link, Route , BrowserRouter as Router ,Routes} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/about'>About</Link></Nav.Link>
            <Nav.Link> <Link to='/users'>Users</Link></Nav.Link>
          </Nav>
      </Navbar>
      <Routes>
      <Route element={<About/>} path='/about'></Route>
      <Route element={<Users/>} path='/users'></Route>
      <Route element={<Home/>} path='/'></Route> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
