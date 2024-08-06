import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
//import Sidebar from '../Components/Sidebar';
import Navbar2 from '../Components/Navbar2';

export default function Grant() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
     
      
      <div className="form-container">
        <Form>
          
          <Row className="mb-3">
         
            
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>1. Project Title</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Label>2. Please list any previous university or other grants you have received.</Form.Label>

           <Form.Group as={Col} controlId="formGridFunding">
              <Form.Label>Funding Source</Form.Label>
              <Form.Control placeholder="" />
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control placeholder="Ex: 01/01/2012-31/12/2012" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCurrency">
              <Form.Label>Unit of Currency</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            
            <Form.Group as={Col} controlId="formGridCurrency">
              <Form.Label>Amount (Numbers only) </Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridproject">
              <Form.Label>3. Are you currently involed in a project</Form.Label>
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="formHorizontalRadios"
                    id="formHorizontalRadiosYes"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadiosNo"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group  controlId="formGridpublication">
              <Form.Label>4. Please list 3 of your recent publications: (please provid links related to the publications</Form.Label>
             
              <Form.Label>Link 1</Form.Label>
                <Form.Control placeholder="" />
                <Form.Label>Link 2</Form.Label>
                <Form.Control placeholder="" />
                <Form.Label>Link 3</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>


            <Form.Group  controlId="formGridinvestigator">
              <Form.Label>5. Co-investigators of the Project</Form.Label>
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
              <Form.Label>6. Foreign Colloborators of the Project</Form.Label>
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

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridgrants">
              <Form.Label>7. Have recevied any grants from outside for this/similar project </Form.Label>
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="formHorizontalRadios"
                    id="formHorizontalRadiosYes"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadiosNo"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridorganization">
            </Form.Group>

            <Form.Group controlId="formGridDuration">
              <Form.Label>Durations (Months)</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Label>Funding Organization</Form.Label>

           <Form.Group as={Col} controlId="formGridorg">
              <Form.Label>Funding Organization</Form.Label>
              <Form.Control placeholder="" />
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridamount">
              <Form.Label>amount</Form.Label>
              <Form.Control placeholder=" 0.00" />
              <Form.Control placeholder=" 0.00" />
            </Form.Group>

            <Form.Group  controlId="formGridDescription">
              <Form.Label>8. List the equipment/resources/facilities available in your Department/Faculty for your research</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" />
            </Form.Group>
          </Row>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
