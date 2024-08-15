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
//   const handleNext = () => {
//     navigate('/uploads'); // Navigate to Supervisors page
//   };

//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to Profile page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
     
      
//       <div className="form-container">
//         <Form>
          
//           <Row className="mb-3">

//             <Form.Group  controlId="formGridinvestigator">
//               <Form.Label>1. Co-investigators of the Project</Form.Label>
//               <Form.Control placeholder="" />
//               <Form.Label>Name</Form.Label>
//                 <Form.Control placeholder="" />
//                 <Form.Label>Affiliated Department and University</Form.Label>
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//             </Form.Group>

//             <Form.Group  controlId="formGridforeign">
//               <Form.Label>2. Foreign Colloborators of the Project</Form.Label>
//               <Form.Control placeholder="" />
//               <Form.Label>Name</Form.Label>
//                 <Form.Control placeholder="" />
//                 <Form.Label>Affiliated University</Form.Label>
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//                 <Form.Control placeholder="" />
//             </Form.Group>
//             </Row>


//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>

//           <Button variant="primary" onClick={handlePrevious} type="submit" className='previousbutton'>Previous</Button>
//           <Button variant="primary" onClick={handleNext} type="submit" className='nextbutton'>Next</Button>
          
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
import { useForm } from './MainForm'; // Import useForm from your context

export default function Grant() {
  const { formData, handleFormDataChange } = useForm(); // Use form context
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleFormDataChange({ [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/uploads'); // Navigate to the uploads page
  };

  const handlePrevious = () => {
    navigate('/project'); // Navigate to the project page
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      
      <div className="form-container">
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="formGridinvestigator">
              <Form.Label>1. Co-investigators of the Project</Form.Label>
              <Form.Control
                name="co_investigators"
                value={formData.co_investigators || ''}
                onChange={handleChange}
                placeholder="Enter co-investigators"
              />
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="co_investigator_name"
                value={formData.co_investigator_name || ''}
                onChange={handleChange}
                placeholder="Enter name"
              />
              <Form.Label>Affiliated Department and University</Form.Label>
              <Form.Control
                name="co_investigator_department"
                value={formData.co_investigator_department || ''}
                onChange={handleChange}
                placeholder="Enter affiliated department"
              />
              <Form.Control
                name="co_investigator_university"
                value={formData.co_investigator_university || ''}
                onChange={handleChange}
                placeholder="Enter affiliated university"
              />
            </Form.Group>

            <Form.Group controlId="formGridforeign">
              <Form.Label>2. Foreign Collaborators of the Project</Form.Label>
              <Form.Control
                name="foreign_collaborators"
                value={formData.foreign_collaborators || ''}
                onChange={handleChange}
                placeholder="Enter foreign collaborators"
              />
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="foreign_collaborator_name"
                value={formData.foreign_collaborator_name || ''}
                onChange={handleChange}
                placeholder="Enter name"
              />
              <Form.Label>Affiliated University</Form.Label>
              <Form.Control
                name="foreign_collaborator_university"
                value={formData.foreign_collaborator_university || ''}
                onChange={handleChange}
                placeholder="Enter affiliated university"
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className='savebutton'>
            Save
          </Button>

          <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext} className='nextbutton'>
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
