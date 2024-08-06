import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar2.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

export default function Navbar2() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navbar-custom-container">
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-custom">
          <Nav>
            <li className="nav-item"><Link to="/grant" className="nav-link">Profile</Link></li>
            <li className="nav-item"><Link to="/project" className="nav-link">Projects</Link></li>
            <Nav.Link href="#funds">Funds</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Navbar2.css'; // Import the CSS file for styling
// import Sidebar from './Sidebar'; // Import Sidebar Component
// import { Link } from 'react-router-dom';


// export default function Navbar2() {
//   return (
//     <div className="navbar-with-sidebar">
//       <Sidebar /> {/* Include the Sidebar here */}
//       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//         <Container className="navbar-custom-container">
//           <Navbar.Collapse id="responsive-navbar-nav" className="navbar-custom">
//             <Nav>
//               <li className="nav-item"><Link to="/grant" className="nav-link">Profile</Link></li>
//               <li className="nav-item"><Link to="/project" className="nav-link">Projects</Link></li>
//               <Nav.Link href="#funds">Funds</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

