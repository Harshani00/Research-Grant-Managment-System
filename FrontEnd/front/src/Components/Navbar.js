import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assets/Img1.png';

const Navbar = () => (
  <div>
    <div className="nav-bar-container">
      <div className="nav-left">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>

      <div className="nav-center">
        <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
      </div>

      <div className="nav-right">
        <button className="nav-button dashboard-button">
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <button className="nav-button profile-button">
          <Link to="/profile">Profile</Link>
        </button>
        <button className="nav-button logout-button">
          <Link to="/signout">Sign Out</Link>
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../Assets/Img1.png';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         {/* Logo on the left */}
//         <Navbar.Brand href="#home">
//           <img src={Logo} alt="Logo" className="Logo" />
//         </Navbar.Brand>

//         {/* Navbar toggler for mobile view */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* Navigation links */}
//             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//             <Nav.Link as={Link} to="/link">Link</Nav.Link>

//             {/* Dropdown menu */}
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* Centered title */}
//           <div className="nav-center">
//             <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
//           </div>

//           {/* Right-aligned buttons */}
//           <Nav className="ml-auto">
//             <button className="nav-button dashboard-button">
//               <Link to="/dashboard">Dashboard</Link>
//             </button>
//             <button className="nav-button profile-button">
//               <Link to="/profile">Profile</Link>
//             </button>
//             <button className="nav-button logout-button">
//               <Link to="/signout">Sign Out</Link>
//             </button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;
