import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Navbar2 from '../Components/Navbar2';
import { useNavigate } from 'react-router-dom';

export default function Grant() {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/reviewers'); // Navigate to Supervisors page
  };

  const handlePrevious = () => {
    navigate('/supervisors'); // Navigate to Profile page
  };   

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />

      <div className="form-container">
        <Form>
         
          <Row className="mb-3">
            <Form.Group controlId="formProjectProposal">
              <Form.Label>1. Upload Project Proposal</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formProjectBudget">
              <Form.Label>2. Upload Project Budget</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formProjectCV">
              <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formCoInvestigatorsCVs">
              <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
              <Form.Control type="file" />
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
