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
// import React, { useState } from 'react';
// import './Sidebar.css'; 
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [completedSteps, setCompletedSteps] = useState({
//     profile: false,
//     project: false,
//     proposal: false,
//     budget: false,
//     supervisor: false,
//     principal: false,
//     cosupervisor: false,
//   });

//   const completeStep = (step) => {
//     setCompletedSteps(prevState => ({ ...prevState, [step]: true }));
//   };

//   return (
//     <div className="sidebar">
//       <ul className="sidebar-menu">
//         <li>
//           <div className={`step-circle ${completedSteps.profile ? 'completed' : ''}`}>
//             {completedSteps.profile && '✓'}
//           </div>
//           <Link to="/profile" onClick={() => completeStep('profile')}>Profile Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.project ? 'completed' : ''}`}>
//             {completedSteps.project && '✓'}
//           </div>
//           <Link to="#project" onClick={() => completeStep('project')}>Project Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.proposal ? 'completed' : ''}`}>
//             {completedSteps.proposal && '✓'}
//           </div>
//           <Link to="#proposal" onClick={() => completeStep('proposal')}>PDF of Project Proposal</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.budget ? 'completed' : ''}`}>
//             {completedSteps.budget && '✓'}
//           </div>
//           <Link to="#budget" onClick={() => completeStep('budget')}>PDF of Budget</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.supervisor ? 'completed' : ''}`}>
//             {completedSteps.supervisor && '✓'}
//           </div>
//           <Link to="/supervisor" onClick={() => completeStep('supervisor')}>Supervisor Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.principal ? 'completed' : ''}`}>
//             {completedSteps.principal && '✓'}
//           </div>
//           <Link to="#principal" onClick={() => completeStep('principal')}>CV of the Principal Investigator</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.cosupervisor ? 'completed' : ''}`}>
//             {completedSteps.cosupervisor && '✓'}
//           </div>
//           <Link to="#cosupervisor" onClick={() => completeStep('cosupervisor')}>CV of the Co Supervisor</Link>
//         </li>
//       </ul>
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