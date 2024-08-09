import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Navbar2 from '../Components/Navbar2';

export default function Grant() {
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
        </Form>
      </div>
    </div>
  );
}
