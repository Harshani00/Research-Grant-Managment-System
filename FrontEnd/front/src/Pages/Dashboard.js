// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import Sidebar from '../Components/Sidebar';


// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
     
      
      
//       <div className="dashboard-container">
//         <CustomCard title="Apply New Grant" buttonText="Apply" linkTo="/grant" />
//         <CustomCard title="Apply Budget Revision" buttonText="Apply" linkTo="/budget" />
//         <CustomCard title="Submit Progress Report" buttonText="Submit" linkTo="/progress" />
//         <CustomCard title="Submit Final Report" buttonText="Submit" linkTo="/report" />
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
      
      
//       <div className="dashboard-container">
//         <CustomCard 
//           title="Apply New Grant" 
//           buttonText="Apply" 
//           linkTo="/grant" 
//           imageSrc={grantImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Apply Budget Revision" 
//           buttonText="Apply" 
//           linkTo="/budget" 
//           imageSrc={budgetImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Progress Report" 
//           buttonText="Submit" 
//           linkTo="/progress" 
//           imageSrc={progressImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Final Report" 
//           buttonText="Submit" 
//           linkTo="/report" 
//           imageSrc={reportImage} // Pass the image URL
//         />
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import { useLocation } from 'react-router-dom'; // Import useLocation


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   const location = useLocation();
//   const userRole = location.state?.userRole;

//   return (
//     <div>
//       <Navbar />

//       <div className="dashboard-container">
//         {userRole === 'Applicant' ? (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               buttonText="Apply" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               buttonText="Apply" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report" 
//               buttonText="Submit" 
//               linkTo="/progress" 
//               imageSrc={progressImage} 
//             />
//             <CustomCard 
//               title="Submit Final Report" 
//               buttonText="Submit" 
//               linkTo="/report" 
//               imageSrc={reportImage} 
//             />
//           </>
//         ) : userRole === 'urc' ? (
//           <>
//             <CustomCard 
//               title="View Grant Applications" 
//               buttonText="View" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Budget Revisions" 
//               buttonText="View" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="View Progress Reports" 
//               buttonText="View" 
//               linkTo="/view-progress" 
//               imageSrc={progressImage} 
//             />
//             <CustomCard 
//               title="View Final Reports" 
//               buttonText="View" 
//               linkTo="/view-report" 
//               imageSrc={reportImage} 
//             />
//           </>
//         ) : (
//           <div>No dashboard available for this role.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
      
      
//       <div className="dashboard-container">
//         <CustomCard 
//           title="Apply New Grant" 
//           buttonText="Apply" 
//           linkTo="/grant" 
//           imageSrc={grantImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Apply Budget Revision" 
//           buttonText="Apply" 
//           linkTo="/budget" 
//           imageSrc={budgetImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Progress Report" 
//           buttonText="Submit" 
//           linkTo="/progress" 
//           imageSrc={progressImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Final Report" 
//           buttonText="Submit" 
//           linkTo="/report" 
//           imageSrc={reportImage} // Pass the image URL
//         />
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// //import reportImage from '../Assets/img10.jpg';
// import ApplicationImage from '../Assets/img4.png';
// import progressImage1 from '../Assets/img7.png';
// import FinalReport from '../Assets/img8.png';
// import ApproveBudget from '../Assets/img9.png';

// export default function Dashboard() {
  
//   const userRole = localStorage.getItem('userRole'); // Get user role from localStorage

//   console.log('User Role:', userRole); // Debugging line to check the value

//   // Render different content based on user role
//   const renderCards = () => {
//     switch (userRole) {
//       case 'urc':
//         return (
//           <>
//             <CustomCard 
//               title="View Grants" 
//               buttonText="View" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Budget" 
//               buttonText="View" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="View Progress Reports & Final Reports"  
//               buttonText="View" 
//               linkTo="/view-progress-reports" 
//               imageSrc={progressImage} 
//             />
          
//           </>
//         );
//       case 'Applicant':
//         return (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               buttonText="Apply" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               buttonText="Apply" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report & Final Report" 
//               buttonText="Submit" 
//               linkTo="/progress" 
//               imageSrc={progressImage} 
//             />
           
//           </>
//         );
//         case 'Admin':
//           return (
//             <>
//               <CustomCard 
//                 title="Veiw Applications" 
//                 buttonText="View" 
//                 linkTo="/view-grants" 
//                 imageSrc={grantImage} 
//               />
//               <CustomCard 
//                 title="Veiw Shortlist Applications" 
//                 buttonText="View" 
//                 linkTo="/view-budget" 
//                 imageSrc={budgetImage} 
//               />
//               <CustomCard 
//                 title="Customize Review Criteria (Criteria , Weight , Marks)"  
//                 buttonText="View" 
//                 linkTo="/view-progress-reports" 
//                 imageSrc={progressImage} 
//               />
//               <CustomCard 
//                 title="Order Applications and View" 
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={ApplicationImage} 
//               />

//               <CustomCard 
//                 title="Request Mid Year Progress / End Year Progress"  
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={progressImage1} 
//               />   

//               <CustomCard 
//                 title="Request Final Reports"   
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={FinalReport}
//               />   

//               <CustomCard 
//                 title="Approve Budget Revision"  
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={ApproveBudget} 
//               />        
//             </>
//           );

//       default:
//         return <p>No dashboard available for your role.</p>;
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container">
//         {renderCards()}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import CustomCard from '../Components/CustomCard';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Dashboard.css';
import Navbar from '../Components/Navbar';
import grantImage from '../Assets/img12.jpg';
import budgetImage from '../Assets/img13.jpg';
import progressImage from '../Assets/img14.jpg';
import progressImage1 from '../Assets/img7.png';
import FinalReport from '../Assets/img8.png';
import ApproveBudget from '../Assets/img9.png';
import SubmittedGrant from '../Assets/img10.jpg';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  
  const userRole = localStorage.getItem('userRole');
  
  // Example usage to avoid warning

  const navigate = useNavigate(); // Initialize useNavigate hook

  const renderCards = () => {
    switch (userRole) {
      case 'urc':
        return (
          <>
            <CustomCard 
              title="View Applications " 
              linkTo="/view-grants" 
              imageSrc={grantImage} 
            />
            <CustomCard 
              title="View Criteria" 
              linkTo="/view-budget" 
              imageSrc={budgetImage} 
            />
            <CustomCard 
              title="Request Progress Report"  
              imageSrc={progressImage}
            >
              <DropdownButton id="dropdown-basic-button" title="Choose Report Type">
                <Dropdown.Item onClick={() => navigate('/submit-mid-year-report')}>Submit Mid-Year Report</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/submit-year-end-report')}>Submit Year-End Report</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/submit-final-report')}>Submit Final Report</Dropdown.Item>
              </DropdownButton>
            </CustomCard>

            <CustomCard 
              title="Approve Budget Revision" 
              linkTo="/view-budget" 
              imageSrc={budgetImage} 
            />

              <CustomCard 
              title="Request Approvals" 
              linkTo="/view-budget" 
              imageSrc={budgetImage} 
            />   

             <CustomCard 
              title="Send Reviewers" 
              linkTo="/view-budget" 
              imageSrc={budgetImage} 
            />  
            
            <CustomCard 
              title="Send Agreements" 
              linkTo="/view-budget" 
              imageSrc={budgetImage} 
            />   
          </>
        );
      case 'Applicant':
        return (
          <>
            <CustomCard 
              title="Apply New Grant" 
              linkTo="/grant" 
              imageSrc={grantImage} 
            />
            <CustomCard 
              title="Apply Budget Revision" 
              linkTo="/budget" 
              imageSrc={budgetImage} 
            />
            <CustomCard 
              title="Submit Report" 
              imageSrc={progressImage}
            >
              <DropdownButton id="dropdown-basic-button" title="Choose Report Type">
              <Dropdown.Item onClick={() => navigate('/midreport')}>Submit Mid-Year Report</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/endreport')}>Submit Year-End Report</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/finalreport')}>Submit Final Report</Dropdown.Item>
              </DropdownButton>
            </CustomCard>

            <CustomCard 
              title="View Applyed Grants" 
              linkTo="/submittedgrant" 
              imageSrc={SubmittedGrant} 
            />
          </>
        );
      case 'Admin':
        return (
          <>
            <CustomCard 
              title="View Applications" 
              linkTo="/viewapplication" 
              imageSrc={grantImage} 
            />
            <CustomCard 
              title="Customize Review Criteria (Criteria, Weight, Marks)"  
              linkTo="/view-progress-reports" 
              imageSrc={progressImage} 
            />
            <CustomCard 
              title="Order Applications and View" 
              linkTo="/view-final-reports" 
              imageSrc={progressImage} 
            />

            
             <CustomCard 
                title="Request Progress Report"  
                buttonText="View" 
                linkTo="/view-final-reports" 
                imageSrc={FinalReport} 
              />   

             

              <CustomCard 
                title="Approve Budget Revision"  
                buttonText="View" 
                linkTo="/view-final-reports" 
                imageSrc={ApproveBudget} 
              />        
          </>
        );
      default:
        return <p>No dashboard available for your role.</p>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        {renderCards()}
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// import CustomCard from '../Components/CustomCard';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import './Dashboard.css';
// import Navbar from '../Components/Navbar';
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import progressImage1 from '../Assets/img7.png';
// import FinalReport from '../Assets/img8.png';
// import ApproveBudget from '../Assets/img9.png';
// import SubmittedGrant from '../Assets/img10.jpg';
// import { useNavigate } from 'react-router-dom';

// export default function Dashboard() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     // Check if the user is logged in
//     fetch('http://localhost:8080/test/LoginCheck.php')
//       .then(response => response.json())
//       .then(data => {
//         if (data.status) {
//           setLoggedIn(true);
//           setUserRole(data.user_role); // Set user role from the response
//           localStorage.setItem('userRole', data.user_role); // Save user role to localStorage
//         } else {
//           setLoggedIn(false);
//           localStorage.removeItem('userRole'); // Clear user role from localStorage
//           navigate('/login'); // Redirect to login page if not logged in
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         navigate('/login'); // Redirect to login page on error
//       });
//   }, [navigate]);

//   const renderCards = () => {
//     switch (userRole) {
//       case 'urc':
//         return (
//           <>
//             <CustomCard 
//               title="View Grants" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Budget" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="View Report" 
//               imageSrc={progressImage}
//             >
//               <DropdownButton id="dropdown-basic-button" title="Choose Report Type">
//                 <Dropdown.Item onClick={() => navigate('/submit-mid-year-report')}>Submit Mid-Year Report</Dropdown.Item>
//                 <Dropdown.Item onClick={() => navigate('/submit-year-end-report')}>Submit Year-End Report</Dropdown.Item>
//                 <Dropdown.Item onClick={() => navigate('/submit-final-report')}>Submit Final Report</Dropdown.Item>
//               </DropdownButton>
//             </CustomCard>
//           </>
//         );
//       case 'Applicant':
//         return (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Report" 
//               imageSrc={progressImage}
//             >
//               <DropdownButton id="dropdown-basic-button" title="Choose Report Type">
//               <Dropdown.Item onClick={() => navigate('/midreport')}>Submit Mid-Year Report</Dropdown.Item>
//                 <Dropdown.Item onClick={() => navigate('/endreport')}>Submit Year-End Report</Dropdown.Item>
//                 <Dropdown.Item onClick={() => navigate('/finalreport')}>Submit Final Report</Dropdown.Item>
//               </DropdownButton>
//             </CustomCard>

//             <CustomCard 
//               title="View Applied Grants" 
//               linkTo="/submittedgrant" 
//               imageSrc={SubmittedGrant} 
//             />
//           </>
//         );
//       case 'Admin':
//         return (
//           <>
//             <CustomCard 
//               title="View Applications" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Shortlist Applications" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Customize Review Criteria (Criteria, Weight, Marks)"  
//               linkTo="/view-progress-reports" 
//               imageSrc={progressImage} 
//             />
//             <CustomCard 
//               title="Order Applications and View" 
//               linkTo="/view-final-reports" 
//               imageSrc={progressImage} 
//             />

//             <CustomCard 
//               title="Request Mid-Year Progress / End-Year Progress"  
//               buttonText="View" 
//               linkTo="/view-final-reports" 
//               imageSrc={progressImage1} 
//             />   

//             <CustomCard 
//               title="Request Final Reports"   
//               buttonText="View" 
//               linkTo="/view-final-reports" 
//               imageSrc={FinalReport}
//             />   

//             <CustomCard 
//               title="Approve Budget Revision"  
//               buttonText="View" 
//               linkTo="/view-final-reports" 
//               imageSrc={ApproveBudget} 
//             />        
//           </>
//         );
//       default:
//         return <p>No dashboard available for your role.</p>;
//     }
//   };

//   if (!loggedIn) {
//     return <p>Loading...</p>; // You can display a loading spinner or message here
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container">
//         {renderCards()}
//       </div>
//     </div>
//   );
// }
