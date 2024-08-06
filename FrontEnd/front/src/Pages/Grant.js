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
            <Form.Group as={Col} xs={12} md={4} controlId="formGridTittle">
              <Form.Label>1. Title</Form.Label>
              <Form.Select defaultValue="Choose..." className="custom-select">
                <option></option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Rev</option>
                <option>Dr</option>
                <option>Prof</option>
              </Form.Select>
            </Form.Group>

            <Form.Group xs={12} md={8} controlId="formGridName">
              <Form.Label>2. Name</Form.Label>
              <Form.Control placeholder="Enter Your Full Name" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>3. Affiliation</Form.Label>
            <Form.Group as={Col} xs={12} md={6} controlId="formGridFaculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option></option>
                <option>Faculty of Computing</option>
                <option>Faculty of Science</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option></option>
                <option>Department of Data and Computer Science</option>
                <option>Department of Software Engineering</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>4. Contacts</Form.Label>
            <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Ex: abc@gmail.com" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Enter Your Phone Number" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridPosition">
              <Form.Label>5. Present Position/Designation</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>6. Academic Highest Qualification</Form.Label>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridUniversity">
              <Form.Label>University</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFeild">
              <Form.Label>7. Your Field of Specialization</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLeave">
              <Form.Label>8. Are You taking sabbatical leave/short term leave during the next 2 years?</Form.Label>
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
          <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Starting Date</Form.Label>
              <Form.Control placeholder="DD/MM/YYYY" />
            </Form.Group>

            <Form.Group controlId="formGridDuration">
              <Form.Label>Durations (Months)</Form.Label>
              <Form.Control placeholder="" />
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
