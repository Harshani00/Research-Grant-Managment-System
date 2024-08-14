import React from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Grant() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/uploads'); // Navigate to Supervisors page
  };

  const handlePrevious = () => {
    navigate('/uploads'); // Navigate to Profile page
  };  

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
     
      
      <div className="form-container">
        <Form>
          
          <Row className="mb-3">
          <Form.Label>*Names & Affiliations of 3- Reviewers of the research proposal (preferably from other faculties/outside institutions)</Form.Label>

            <Form.Group  controlId="formGridinvestigator">
              <Form.Label>1. Name of the Reviewer</Form.Label>
            
                <Form.Control placeholder="Reviewer 1" className="form-control" />
                <Form.Control placeholder="Reviewer 2" className="form-control" />
                <Form.Control placeholder="Reviewer 3" className="form-control" />
              
              
              <Form.Label>2. Email</Form.Label>
                <Form.Control placeholder="Reviewer 1: Email " className="form-control" />
                <Form.Control placeholder="Reviewer 2: Email" className="form-control" />
                <Form.Control placeholder="Reviewer 3: Email" className="form-control" />
            </Form.Group>

            <Form.Group  controlId="formGridforeign">
              <Form.Label>3. Affiliation</Form.Label>
              <Form.Control placeholder="Reviewer 1: Affiliation " className="form-control" />
              <Form.Control placeholder="Reviewer 2: Affiliation" className="form-control" />
              <Form.Control placeholder="Reviewer 3: Affiliation" className="form-control" />
              
            </Form.Group>
            </Row>


          <Button variant="primary" type="submit" className='savebutton'>
            Save
          </Button>

          <Button variant="primary" onClick={handlePrevious} type="submit" className='previousbutton'>Previous</Button>
          <Button variant="primary"  type="submit" className='nextbutton'>Finish and Submit</Button>
          
        </Form>
      </div>
    </div>
  );
}
