// import React from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import './ViewApplication.css'; // Import the CSS file

// export default function ViewApplication() {
//   return (
//     <div>
//       <Navbar />

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <td colSpan={5} className="dropdown-row">
//               <label htmlFor="year-select">Year: </label>
//               <select id="year-select">
//                 <option value="">Select Year</option>
//                 <option value="2023">2023</option>
//                 <option value="2024">2024</option>
//                 <option value="2025">2025</option>
//               </select>
              
//               <label htmlFor="status-select">Status: </label>
//               <select id="status-select">
//                 <option value="">Select Status</option>
//                 <option value="Submitted">Submitted</option>
//                 <option value="Granted">Granted</option>
//                 <option value="Pennding Approvels">Pennding Approvels</option>
//                 <option value="Reviewers Commnets">Reviewers Commnets</option>
//                 <option value="Reject">Reject</option>
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <th>#</th>
//             <th>Project Title</th>
//             <th>Submitted</th>
//             <th>Status</th>
//             <th>View Application</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Larry the Bird</td>
//             <td>@twitter</td>
//             <td>@twitter</td>
//             <td>@twitter</td>
            
            
//           </tr>
          
            
     
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import './ViewApplication.css';

// export default function ViewApplication() {
//   const [selectedStatus, setSelectedStatus] = useState('');
//   const [applications, setApplications] = useState([
//     { id: 1, projectTitle: 'Project A', submitted: '2024-01-15', status: 'Submitted' },
//     { id: 2, projectTitle: 'Project B', submitted: '2024-02-20', status: 'Granted' },
//     { id: 3, projectTitle: 'Project C', submitted: '2024-03-05', status: 'Pending Approvals' },
//     // Add more application records as needed
//   ]);

//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//   };

//   const filteredApplications = selectedStatus
//     ? applications.filter((app) => app.status === selectedStatus)
//     : applications;

//   return (
//     <div>
//       <Navbar />

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <td colSpan={5} className="dropdown-row">
//               <label htmlFor="year-select">Year: </label>
//               <select id="year-select">
//                 <option value="">Select Year</option>
//                 <option value="2023">2023</option>
//                 <option value="2024">2024</option>
//                 <option value="2025">2025</option>
//               </select>
              
//               <label htmlFor="status-select">Status: </label>
//               <select id="status-select" onChange={handleStatusChange}>
//                 <option value="">Select Status</option>
//                 <option value="Submitted ">Submitted</option>
//                 <option value="Granted">Granted</option>
//                 <option value="Pending Approvals">Pending Approvals</option>
//                 <option value="Reviewers Comments">Reviewers Comments</option>
//                 <option value="Reject">Reject</option>
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <th>#</th>
//             <th>Project Title</th>
//             <th>Submitted Date </th>
//             <th>Status</th>
//             <th>View Application</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.id}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submitted}</td>
//               <td>{app.status}</td>
//               <td><a href={`/view-application/${app.id}`}>View</a></td> {/* Assuming a route to view details */}
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import './Table.css';

export default function ViewApplication() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/test/ViewApplication.php'); // Adjust endpoint as needed
        setApplications(response.data);
        setFilteredApplications(response.data); // Initialize with all data
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    if (selectedStatus) {
      setFilteredApplications(
        applications.filter((app) => app.status === selectedStatus)
      );
    } else {
      setFilteredApplications(applications); // Show all if no filter
    }
  }, [selectedStatus, applications]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5} className="dropdown-row">
              <label htmlFor="year-select">Year: </label>
              <select id="year-select">
                <option value="">Select Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              
              <label htmlFor="status-select">Status: </label>
              <select id="status-select" onChange={handleStatusChange}>
                <option value="">Select Status</option>
                <option value="Submitted">Submitted</option>
                <option value="Granted">Granted</option>
                <option value="Pending Approvals">Pending Approvals</option>
                <option value="Reviewers Comments">Reviewers Comments</option>
                <option value="Reject">Reject</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>{app.status}</td>
              <td><a href={`/view-application/${app.id}`}>View</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
