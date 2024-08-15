// import React from 'react';
// import Button from 'react-bootstrap/Button';

// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';

// export default function Grant() {
//   const navigate = useNavigate();
 
//   const handlePrevious = () => {
//     navigate('/uploads'); // Navigate to Profile page
//   };  

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
     
      
//       <div className="form-container">
//         <Form>
          
//           <Row className="mb-3">
//           <Form.Label>*Names & Affiliations of 3- Reviewers of the research proposal (preferably from other faculties/outside institutions)</Form.Label>

//             <Form.Group  controlId="formGridinvestigator">
//               <Form.Label>1. Name of the Reviewer</Form.Label>
            
//                 <Form.Control placeholder="Reviewer 1" className="form-control" />
//                 <Form.Control placeholder="Reviewer 2" className="form-control" />
//                 <Form.Control placeholder="Reviewer 3" className="form-control" />
              
              
//               <Form.Label>2. Email</Form.Label>
//                 <Form.Control placeholder="Reviewer 1: Email " className="form-control" />
//                 <Form.Control placeholder="Reviewer 2: Email" className="form-control" />
//                 <Form.Control placeholder="Reviewer 3: Email" className="form-control" />
//             </Form.Group>

//             <Form.Group  controlId="formGridforeign">
//               <Form.Label>3. Affiliation</Form.Label>
//               <Form.Control placeholder="Reviewer 1: Affiliation " className="form-control" />
//               <Form.Control placeholder="Reviewer 2: Affiliation" className="form-control" />
//               <Form.Control placeholder="Reviewer 3: Affiliation" className="form-control" />
              
//             </Form.Group>
//             </Row>


//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>

//           <Button variant="primary" onClick={handlePrevious} type="submit" className='previousbutton'>Previous</Button>
//           <Button variant="primary"  type="submit" className='nextbutton'>Finish and Submit</Button>
          
//         </Form>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from FormContext

export default function Grant() {
  const { formData, handleFormDataChange } = useForm();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
    // Example: console.log(formData);
  };

  const handlePrevious = () => {
    navigate('/uploads'); // Navigate to Profile page
  };

  const handleFinish = () => {
    // Handle form submission or final action
    navigate('/submission-complete'); // Navigate to a completion page or similar
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
     
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Label>*Names & Affiliations of 3- Reviewers of the research proposal (preferably from other faculties/outside institutions)</Form.Label>

            <Form.Group controlId="formGridinvestigator">
              <Form.Label>1. Name of the Reviewer</Form.Label>
              <Form.Control 
                name="reviewer1Name" 
                value={formData.reviewer1Name} 
                placeholder="Reviewer 1" 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer2Name" 
                value={formData.reviewer2Name} 
                placeholder="Reviewer 2" 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer3Name" 
                value={formData.reviewer3Name} 
                placeholder="Reviewer 3" 
                className="form-control"
                onChange={handleInputChange} 
              />
              
              <Form.Label>2. Email</Form.Label>
              <Form.Control 
                name="reviewer1Email" 
                value={formData.reviewer1Email} 
                placeholder="Reviewer 1: Email " 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer2Email" 
                value={formData.reviewer2Email} 
                placeholder="Reviewer 2: Email" 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer3Email" 
                value={formData.reviewer3Email} 
                placeholder="Reviewer 3: Email" 
                className="form-control"
                onChange={handleInputChange} 
              />
            </Form.Group>

            <Form.Group controlId="formGridforeign">
              <Form.Label>3. Affiliation</Form.Label>
              <Form.Control 
                name="reviewer1Affiliation" 
                value={formData.reviewer1Affiliation} 
                placeholder="Reviewer 1: Affiliation " 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer2Affiliation" 
                value={formData.reviewer2Affiliation} 
                placeholder="Reviewer 2: Affiliation" 
                className="form-control"
                onChange={handleInputChange} 
              />
              <Form.Control 
                name="reviewer3Affiliation" 
                value={formData.reviewer3Affiliation} 
                placeholder="Reviewer 3: Affiliation" 
                className="form-control"
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className='savebutton'>
            Save
          </Button>

          <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
            Previous
          </Button>
          <Button variant="primary" onClick={handleFinish} className='nextbutton'>
            Finish and Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
