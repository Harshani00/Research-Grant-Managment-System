import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Sidebar from '../Components/Sidebar';

export default function Grant() {
  const [grantRows, setGrantRows] = useState([
    { fundingSource: '', duration: '', currency: '', amount: '' },
  ]);

  const handleAddRow = () => {
    setGrantRows([...grantRows, { fundingSource: '', duration: '', currency: '', amount: '' }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newGrantRows = grantRows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setGrantRows(newGrantRows);
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      
      <div className="form-container">
        <Form>
          <Row className="mb-3">
            <Form.Label>1. Project Title</Form.Label>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Control as="textarea" rows={3} placeholder="" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>2. Please list any previous university or other grants you have received.</Form.Label>
          </Row>

          {/* Column headers */}
          <Row className="mb-3">
            <Col><Form.Label>Funding Source</Form.Label></Col>
            <Col><Form.Label>Duration</Form.Label></Col>
            <Col><Form.Label>Unit of Currency</Form.Label></Col>
            <Col><Form.Label>Amount (Numbers only)</Form.Label></Col>
          </Row>

          {/* Dynamically generated rows */}
          {grantRows.map((row, index) => (
            <Row className="mb-3" key={index}>
              <Col>
                <Form.Control
                  name="fundingSource"
                  value={row.fundingSource}
                  onChange={(e) => handleChange(index, e)}
                  placeholder=""
                />
              </Col>
              <Col>
                <Form.Control
                  name="duration"
                  value={row.duration}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Ex: 01/01/2012-31/12/2012"
                />
              </Col>
              <Col>
                <Form.Control
                  name="currency"
                  value={row.currency}
                  onChange={(e) => handleChange(index, e)}
                  placeholder=""
                />
              </Col>
              <Col>
                <Form.Control
                  name="amount"
                  value={row.amount}
                  onChange={(e) => handleChange(index, e)}
                  placeholder=""
                />
              </Col>
            </Row>
          ))}

          <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
            Add Row
          </Button>

          <Row className="mb-3">
            <Form.Label>3. Are you currently involved in a project?</Form.Label>
            <Form.Group as={Col} controlId="formGridProject">
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="projectInvolved"
                    id="formHorizontalRadiosYes"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="projectInvolved"
                    id="formHorizontalRadiosNo"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>4. Please list 3 of your recent publications (provide links related to the publications).</Form.Label>
            <Form.Group as={Col} controlId="formGridPublications">
              <Form.Label>Link 1</Form.Label>
              <Form.Control placeholder="" />
              <Form.Label>Link 2</Form.Label>
              <Form.Control placeholder="" />
              <Form.Label>Link 3</Form.Label>
              <Form.Control placeholder="" />
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
