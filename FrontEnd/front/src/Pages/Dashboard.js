import React from 'react';
import CustomCard from '../Components/CustomCard'; // Import the reusable component
import './Dashboard.css';
import Navbar from '../Components/Navbar'; // Import the reusable component
import Sidebar from '../Components/Sidebar';


export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      
      
      <div className="dashboard-container">
        <CustomCard title="Apply New Grant" buttonText="Apply" linkTo="/grant" />
        <CustomCard title="Apply Budget Revision" buttonText="Apply" linkTo="/budget-revision" />
        <CustomCard title="Submit Progress Report" buttonText="Submit" linkTo="/progress-report" />
        <CustomCard title="Submit Final Report" buttonText="Submit" linkTo="/final-report" />
      </div>
    </div>
  );
}
