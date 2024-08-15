import React from 'react';
import CustomCard from '../Components/CustomCard'; // Import the reusable component
import '../Pages/Dashboard.css';
import Navbar from '../Components/Navbar'; // Import the reusable component


// Import images
import grantImage from '../Assets/img12.jpg';
import budgetImage from '../Assets/img13.jpg';
import progressImage from '../Assets/img14.jpg';
import reportImage from '../Assets/img10.jpg';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      
      
      <div className="dashboard-container">
        <CustomCard 
          title="Apply New Grant" 
          buttonText="Apply" 
          linkTo="/grant" 
          imageSrc={grantImage} // Pass the image URL
        />
        <CustomCard 
          title="Apply Budget Revision" 
          buttonText="Apply" 
          linkTo="/budget" 
          imageSrc={budgetImage} // Pass the image URL
        />
        <CustomCard 
          title="Submit Progress Report" 
          buttonText="Submit" 
          linkTo="/progress" 
          imageSrc={progressImage} // Pass the image URL
        />
        <CustomCard 
          title="Submit Final Report" 
          buttonText="Submit" 
          linkTo="/report" 
          imageSrc={reportImage} // Pass the image URL
        />
      </div>
    </div>
  );
}
