// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
// import Navbar2 from '../Components/Navbar2';
// import { useNavigate } from 'react-router-dom';

// export default function Grant() {

//   const navigate = useNavigate();
//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to Supervisors page
//   };

//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to Profile page
//   };   

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
         
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control type="file" />
//             </Form.Group>
//           </Row>

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

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
// import Navbar2 from '../Components/Navbar2';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     handleFormDataChange({ target: { name, value: files[0] } }); // Save file as a File object
//   };

//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to the reviewers page
//   };

//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 value={formData.projectProposal || ''}
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 value={formData.projectBudget || ''}
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 value={formData.projectCV || ''}
              
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 value={formData.coInvestigatorsCVs || ''}
//                 onChange={handleFileChange}
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
// import Navbar2 from '../Components/Navbar2';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     // Since files is an array, we take the first file
//     if (files.length > 0) {
//       handleFormDataChange({ target: { name, value: files[0] } }); // Save file as a File object
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to a backend
//     const formData = new FormData();
//     formData.append('projectProposal', formData.projectProposal);
//     formData.append('projectBudget', formData.projectBudget);
//     formData.append('projectCV', formData.projectCV);
//     formData.append('coInvestigatorsCVs', formData.coInvestigatorsCVs);
//     // Add code to send `formData` to your backend if needed
//   };

//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to the reviewers page
//   };

//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
// import Navbar2 from '../Components/Navbar2';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm();
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       // Store file name or URL in formData
//       handleFormDataChange({ [name]: files[0].name }); // Store the file name
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle file upload here if needed, e.g., send FormData to backend
//     const formData = new FormData();
//     formData.append('projectProposal', formData.projectProposal);
//     formData.append('projectBudget', formData.projectBudget);
//     formData.append('projectCV', formData.projectCV);
//     formData.append('coInvestigatorsCVs', formData.coInvestigatorsCVs);

//     // Example of sending data to a backend
//     // fetch('/api/upload', {
//     //   method: 'POST',
//     //   body: formData,
//     // });
//   };

//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to the reviewers page
//   };

//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm();
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         handleFormDataChange({ [name]: reader.result });
//       };

//       reader.readAsDataURL(file); // Convert file to base64
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission if needed
//   };

//   const handlePrevious = () => {
//     navigate('/uploads'); // Navigate to Profile page
//   };

//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to the reviewers page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
     
//       <div className="form-container">
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//           <Form.Group controlId="formProjectProposal">
//   <Form.Label>1. Upload Project Proposal</Form.Label>
//   <Form.Control
//     type="file"
//     name="projectProposal"
//     onChange={handleFileChange}
//   />
//   {formData.projectProposal && (
//     <a href={formData.projectProposal} target="_blank" rel="noopener noreferrer">
//       View Uploaded Project Proposal
//     </a>
//   )}
// </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm();
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       const url = URL.createObjectURL(file); // Create a temporary URL for the file
//       handleFormDataChange({ [name]: url }); // Save the URL in the form data
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     if (formData.projectProposal) form.append('projectProposal', formData.projectProposal);
//     if (formData.projectBudget) form.append('projectBudget', formData.projectBudget);
//     if (formData.projectCV) form.append('projectCV', formData.projectCV);
//     if (formData.coInvestigatorsCVs) form.append('coInvestigatorsCVs', formData.coInvestigatorsCVs);

//     // Send the FormData to your backend
//     try {
//       const response = await fetch('/upload-endpoint', { // Replace with your upload endpoint
//         method: 'POST',
//         body: form,
//       });

//       if (response.ok) {
//         // Handle success
//         console.log('Files uploaded successfully');
//       } else {
//         // Handle error
//         console.error('File upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to Profile page
//   };

//   const handleNext = () => {
//     navigate('/reviewers'); // Navigate to the reviewers page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
     
//       <div className="form-container">
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//               />
//               {formData.projectProposal && (
//                 <a href={formData.projectProposal} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Proposal
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//               />
//               {formData.projectBudget && (
//                 <a href={formData.projectBudget} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Budget
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//               />
//               {formData.projectCV && (
//                 <a href={formData.projectCV} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project CV
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//               />
//               {formData.coInvestigatorsCVs && (
//                 <a href={formData.coInvestigatorsCVs} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Co-investigators' CVs
//                 </a>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       handleFormDataChange({ [name]: file }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//   const validate = () => {
//     let errors = {};

//     if (!formData.projectProposal) errors.projectProposal = 'Project Proposal is required.';
//     if (!formData.projectBudget) errors.projectBudget = 'Project Budget is required.';
//     if (!formData.projectCV) errors.projectCV = 'Project CV is required.';
//     if (!formData.coInvestigatorsCVs) errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validate()) {
//       try {
//         const response = await axios.post('http://localhost:8080/test/Grant.php', formData, {
//           headers: {
//             'Content-Type':  'multipart/form-data',
//           },
//           transformRequest: [(data) => {
//             const params = new URLSearchParams();
//             for (const key in data) {
//               params.append(key, data[key]);
//             }
//             return params;
//           }],
//         });

//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       await handleSubmit(); // Submit form data if valid
//       navigate('/reviewers'); // Navigate to the reviewers page
//     }
//   };

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   const handleSave = async () => {
//     if (validate()) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
//       {submitted && (
//           <div className="alert alert-success" role="alert">
//             Form submitted successfully!
//           </div>
//         )}
      
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal instanceof File  && (
//                 <a href={URL.createObjectURL(formData.projectProposal)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Proposal
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectBudget)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Budget
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV  instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectCV)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project CV
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs instanceof File && (
//                 <a href={URL.createObjectURL(formData.coInvestigatorsCVs)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Co-investigators' CVs
//                 </a>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       handleFormDataChange({ [name]: file }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//   const validate = () => {
//     let errors = {};

//     if (!formData.projectProposal) errors.projectProposal = 'Project Proposal is required.';
//     if (!formData.projectBudget) errors.projectBudget = 'Project Budget is required.';
//     if (!formData.projectCV) errors.projectCV = 'Project CV is required.';
//     if (!formData.coInvestigatorsCVs) errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     if (e) e.preventDefault(); // Prevent default only if event is provided

//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//           if (formData[key] instanceof File) {
//             formDataToSend.append(key, formData[key]);
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }

//         const response = await axios.post('http://localhost:8080/test/Grant.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   // Handle Save button
//   const handleSave = async () => {
//     if (validate()) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };
//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       await handleSubmit(); // Call handleSubmit without event
//       navigate('/reviewers'); // Navigate to the reviewers page
//     }
//   };

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
//         {submitted && (
//           <div className="alert alert-success" role="alert">
//             Form submitted successfully!
//           </div>
//         )}
      
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectProposal)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Proposal
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectBudget)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Budget
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectCV)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project CV
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs instanceof File && (
//                 <a href={URL.createObjectURL(formData.coInvestigatorsCVs)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Co-investigators' CVs
//                 </a>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="button" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
import axios from 'axios'; // Import axios for HTTP requests

export default function Grant() {
  const { formData, handleFormDataChange } = useForm(); // Use form context
  const [formErrors, setFormErrors] = useState({}); // Define state for form errors
  const [submitted, setSubmitted] = useState(false); // Define state for form submission
  const navigate = useNavigate();

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      handleFormDataChange({ [name]: file }); // Save the file object in the form data
    }
  };

  // Validation function to check required fields
 // Validation function to check required fields
const validate = () => {
  let errors = {};

  // Check if each required file input has a value
  if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
    errors.projectProposal = 'Project Proposal is required.';
  }

  if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
    errors.projectBudget = 'Project Budget is required.';
  }

  if (!formData.projectCV || !(formData.projectCV instanceof File)) {
    errors.projectCV = 'Project CV is required.';
  }

  if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
    errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0; // Return true if no errors
};


  // Handle form submission
  const handleSubmit = async () => {
    if (validate()) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          if (formData[key] instanceof File) {
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }

        const response = await axios.post('http://localhost:8080/test/Grant.php', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert(response.data);
        setSubmitted(true); // Set form as submitted
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };

  // Handle Save button
  const handleSave = async () => {
    const isValid = validate(); // Validate form
    if (isValid) {
      await handleSubmit(); // Submit form data if valid
    }
  };

  // Navigate to the next form step
  const handleNext = async () => {
    if (validate()) {
      navigate('/reviewers'); // Update this path to the correct previous page
    }else {
      alert('Missing Fields Required.');
    }
  };
  
  

  // Navigate to the previous form step
  const handlePrevious = () => {
    navigate('/supervisors'); // Navigate to the supervisors page
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      
      <div className="form-container">
        {submitted && (
          <div className="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        )}
      
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="formProjectProposal">
              <Form.Label>1. Upload Project Proposal</Form.Label>
              <Form.Control
                type="file"
                name="projectProposal"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectProposal}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectProposal}
              </Form.Control.Feedback>
              {formData.projectProposal instanceof File && (
                <a href={URL.createObjectURL(formData.projectProposal)} target="_blank" rel="noopener noreferrer">
                  View Uploaded Project Proposal
                </a>
              )}
            </Form.Group>

            <Form.Group controlId="formProjectBudget">
              <Form.Label>2. Upload Project Budget</Form.Label>
              <Form.Control
                type="file"
                name="projectBudget"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectBudget}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectBudget}
              </Form.Control.Feedback>
              {formData.projectBudget instanceof File && (
                <a href={URL.createObjectURL(formData.projectBudget)} target="_blank" rel="noopener noreferrer">
                  View Uploaded Project Budget
                </a>
              )}
            </Form.Group>

            <Form.Group controlId="formProjectCV">
              <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
              <Form.Control
                type="file"
                name="projectCV"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectCV}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectCV}
              </Form.Control.Feedback>
              {formData.projectCV instanceof File && (
                <a href={URL.createObjectURL(formData.projectCV)} target="_blank" rel="noopener noreferrer">
                  View Uploaded Project CV
                </a>
              )}
            </Form.Group>

            <Form.Group controlId="formCoInvestigatorsCVs">
              <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
              <Form.Control
                type="file"
                name="coInvestigatorsCVs"
                onChange={handleFileChange}
                isInvalid={!!formErrors.coInvestigatorsCVs}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.coInvestigatorsCVs}
              </Form.Control.Feedback>
              {formData.coInvestigatorsCVs instanceof File && (
                <a href={URL.createObjectURL(formData.coInvestigatorsCVs)} target="_blank" rel="noopener noreferrer">
                  View Uploaded Co-investigators' CVs
                </a>
              )}
            </Form.Group>
          </Row>

          <Button variant="primary" onClick={handleSave} type="button" className='savebutton'>
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
