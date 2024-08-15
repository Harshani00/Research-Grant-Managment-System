// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Home.css';
// import backgroundImage from '../Assets/img10.jpg'; // Import your background image

// export default function HomePage() {
//   return (
//     <div style={{ backgroundImage: `url(${backgroundImage})` }}>
//     <div className="home-page-container">
//       <div className="content-container">
//         <h1 className="home-title">Welcome to Research Grant Managment System</h1>
//         <Button className="home-button" href="/signup">Signup</Button>
//         <Button className="home-button" href="/login">Login</Button>
//       </div>
//     </div>
//     </div>
//   );
// }
import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'; // Import the CSS file
import backgroundImage from '../Assets/img11.jpg'; // Import your background image

export default function HomePage() {
  return (
    <div className="home-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-page-container">
        <div className="content-container">
          <h1 className="home-title">Welcome to </h1>
          <h2 className="home-title">Research Grant Managment System</h2>
          <div className="button-container">
          <Button className="home-button" href="/signup">Signup</Button>
          <Button className="home-button" href="/login">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
