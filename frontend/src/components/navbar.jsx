import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './button'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar({ isDarkMode, handleSwitchChange }) {

  const [potraits, setPotraits] = useState([])


  useEffect(() => {
    // Fetch items
    const fetchAllitems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/items");
        setPotraits(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllitems();
  }, []);

 return (
    
      
 
    <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" className="navbar" w style={{position:'fixed',width:'100%', opacity:0.8 ,zIndex:1000}}>
      <Container className='container' >
        <Navbar.Brand as={Link} className="nav-item nav-link" to="/">Art</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Nav.Link as={Link} className="nav-item nav-link" to="/store">Store</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/design">Design</NavDropdown.Item>
              <NavDropdown.Item href="/potrait">Potrait</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/All">Separated link</NavDropdown.Item>
            </NavDropdown>
            <form class="d-flex" role="search" >
            </form>

          </Nav>
          <Link to='/cart' style={{ marginRight: '10px' }} >
            <ShoppingCartIcon className='linknav' style={{ color: isDarkMode ? "white" : "black", fontSize: '30' }}>
            </ShoppingCartIcon>

          </Link>
          <Button />
          <Button />

        </Navbar.Collapse>
      </Container>
      <div style={{filter:'blur(1px)',position:'fixed', width:'100%',top:0,left:0, backgroundColor:'black'}}>

      </div>


    </Navbar>




  )
}


//   return (

//     <nav class="navbar navbar-expand-lg bg-light" style={{width:"100%"}}>
//     <div class="container-fluid" style={{width:"100%"}}>
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Dropdown
//             </a>
//             <ul class="dropdown-menu">
//               <li><a class="dropdown-item" href="#">Action</a></li>
//               <li><a class="dropdown-item" href="#">Another action</a></li>
//               <li><hr class="dropdown-divider"/></li>
//               <li><a class="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled">Disabled</a>
//           </li>
//         </ul>

//       </div>
//     </div>
//   </nav>


//   )}
export default NavBar;