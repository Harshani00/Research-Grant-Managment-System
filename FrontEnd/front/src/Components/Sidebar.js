// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//         <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//         <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#budget">Budget Revision</a></li>
//           <li><a href="#progress">Progress Report</a></li>
//           <li><a href="#final">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? 'Close' : 'Open'} Sidebar
//         </button>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        {/* Your navbar content */}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} size="2x"  /> // Close icon
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" /> // Hamburger icon
          )}
        </button>
        <ul className="sidebar-menu">
          <li><Link to="/grant">New Grant</Link></li>
          <li><a href="#about">Budget Revision</a></li>
          <li><a href="#services">Progress Report</a></li>
          <li><a href="#contact">Final Report</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
