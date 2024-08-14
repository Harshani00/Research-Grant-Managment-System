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
    navigate('/project'); // Navigate to Profile page
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
     
      
      <div className="form-container">
        <Form>
          
          <Row className="mb-3">

            <Form.Group  controlId="formGridinvestigator">
              <Form.Label>1. Co-investigators of the Project</Form.Label>
              <Form.Control placeholder="" />
              <Form.Label>Name</Form.Label>
                <Form.Control placeholder="" />
                <Form.Label>Affiliated Department and University</Form.Label>
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group  controlId="formGridforeign">
              <Form.Label>2. Foreign Colloborators of the Project</Form.Label>
              <Form.Control placeholder="" />
              <Form.Label>Name</Form.Label>
                <Form.Control placeholder="" />
                <Form.Label>Affiliated University</Form.Label>
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
                <Form.Control placeholder="" />
            </Form.Group>
            </Row>


          <Button variant="primary" type="submit" className='savebutton'>
            Save
          </Button>

          <Button variant="primary" onClick={handlePrevious} type="submit" className='previousbutton'>Previous</Button>
          <Button variant="primary" onClick={handleNext} type="submit" className='nextbutton'>Next</Button>
          
        </Form>
      </div>
    </div>
  );
}
