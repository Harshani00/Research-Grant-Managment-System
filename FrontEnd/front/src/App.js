import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./Pages/Dashboard";
import Grant from './Pages/Grant';
import Project from './Pages/Project';
import Login from './Pages/Login';  
import Signup from './Pages/Signup';
import Sidebar from './Components/Sidebar';
import Supervisors from  './Pages/Supervisors';
import Uploads from './Pages/Uploads';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grant" element={<Grant/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/supervisors" element={<Supervisors/>} />
          <Route path="/uploads" element={<Uploads/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sidebar" element={<Sidebar/>} />


          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

