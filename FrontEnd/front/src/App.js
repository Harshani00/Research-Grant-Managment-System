// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Dashboard from "./Pages/Dashboard";
// import Grant from './Pages/Grant';
//  import Project from './Pages/Project';
// import Login from './Pages/Login';  
// import Signup from './Pages/Signup';
// import Sidebar from './Components/Sidebar';
// import Supervisors from  './Pages/Supervisors';
// import Uploads from './Pages/Uploads';
// import Reviewers from './Pages/Reviewers';
// import Budget from './Pages/Budget';
// import Progress from './Pages/Progress';
// import Report from './Pages/Report';
// //import FormContext from './FormComponents/FormContext';



// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/grant" element={<Grant/>} />
//           <Route path="/project" element={<Project/>} />
//           <Route path="/supervisors" element={<Supervisors/>} />
//           <Route path="/uploads" element={<Uploads/>} />
//           <Route path="/reviewers" element={<Reviewers/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/signup" element={<Signup/>} />
//           <Route path="/sidebar" element={<Sidebar/>} />
//           <Route path="/budget" element={<Budget/>} />
//           <Route path="/progress" element={<Progress/>} />
//           <Route path="/report" element={<Report/>} />
//           {/* <Route path="/formcontext" element={<FormContext/>} /> */}
         


          
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormProvider } from './Pages/MainForm'; // Import FormProvide

 // Applicante Pages
import Dashboard from "./Pages/Dashboard";
import Grant from './Pages/Grant';
import Project from './Pages/Project';
import Login from './Pages/Login';  
import Signup from './Pages/Signup';
import Sidebar from './Components/Sidebar';
import Supervisors from  './Pages/Supervisors';
import Uploads from './Pages/Uploads';
import Reviewers from './Pages/Reviewers';
import Budget from './Pages/Budget';
import Home from './Pages/Home';
import MidReport from './Pages/MidReport';
import EndReport from './Pages/EndReport';
import FinalReport from './Pages/FinalReport';
import SubmittedGrant from './Pages/SubmittedGrant';
 
// URC Secretary Pages
import ViewApplication from './Pages/Secretary/ViewApplication';

// import Progress from './Pages/Progress';
// import Report from './Pages/Report';




class App extends React.Component {
  render() {
    return (
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grant" element={<Grant />} />
            <Route path="/project" element={<Project />} />
            <Route path="/supervisors" element={<Supervisors />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/reviewers" element={<Reviewers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/midreport" element={<MidReport />} />
            <Route path="/endreport" element={<EndReport />} /> 
            <Route path="/finalreport" element={<FinalReport />} />
            <Route path="/submittedgrant" element={<SubmittedGrant />} />

            <Route path="/viewapplication" element={<ViewApplication />} />




            

            
            
          </Routes>
        </BrowserRouter>
      </FormProvider>
    );
  }
}

export default App;
