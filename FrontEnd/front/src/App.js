import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./Pages/Dashboard";
import Grant from './Pages/Grant';
import Project from './Pages/Project';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grant" element={<Grant/>} />
          <Route path="/project" element={<Project/>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

