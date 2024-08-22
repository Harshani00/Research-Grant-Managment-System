// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Signup.css'; // Import the CSS file if needed
// import backgroundImage from '../Assets/img6.png';


// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: ''
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = 'User name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (!formData.role) newErrors.role = 'Role is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/test/Login.php', formData);
//       if (response.data.status) {
//         navigate('/dashboard');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };
//   const handleSignupRedirect = () => {
//     navigate('/signup'); // Navigate to the login page
//   };

//   return (

    
//     <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
//       <div className="access-container1">
//       <h2 className="access-title">Log In</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formUserName">
//             <Form.Label>User name</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter User Name"
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formRole">
//             <Form.Label>Role</Form.Label>
//             <Form.Select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               isInvalid={!!errors.role}
//             >
//               <option value="" disabled>Select your role</option>
//               <option value="urc">Director - URC </option>
//               <option value="Dean">Dean</option>
//               <option value="HOD">Head of the Department</option>
//               <option value="reviewer">Reviewer</option>
//               <option value="Applicant">Applicant</option>
//               <option value="Admin">Admin</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="button1">
//             Sign In
//           </Button>
//         </Form>

//         <div className="bottom mt-3">
//           <Form.Check
//             type="checkbox"
//             label="Remember me"
//             defaultChecked
//             name="remember"
//             className="cbox"
//           />
//            <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect} >SignUp Here</Button></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Signup.css';
// import backgroundImage from '../Assets/img6.png';

// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: ''
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = 'User name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (!formData.role) newErrors.role = 'Role is required';
//     return newErrors;
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:8080/test/Login.php', formData);
//       if (response.data.status) {
//         const userRole = response.data.role;
//         console.log('User Role:', userRole); // Log userRole for debugging
//         navigate('/dashboard', { state: { userRole } });
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };
  
  

//   const handleSignupRedirect = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="access-container1">
//         <h2 className="access-title">Log In</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formUserName">
//             <Form.Label>User name</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter User Name"
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formRole">
//             <Form.Label>Role</Form.Label>
//             <Form.Select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               isInvalid={!!errors.role}
//             >
//               <option value="" disabled>Select your role</option>
//               <option value="urc">Director - URC </option>
//               <option value="Dean">Dean</option>
//               <option value="HOD">Head of the Department</option>
//               <option value="reviewer">Reviewer</option>
//               <option value="Applicant">Applicant</option>
//               <option value="Admin">Admin</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="button1">
//             Sign In
//           </Button>
//         </Form>

//         <div className="bottom mt-3">
//           <Form.Check
//             type="checkbox"
//             label="Remember me"
//             defaultChecked
//             name="remember"
//             className="cbox"
//           />
//           <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect} >SignUp Here</Button></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Signup.css'; // Import the CSS file if needed
// import backgroundImage from '../Assets/img6.png';

// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/test/Login.php', formData);
//       if (response.data.status) {
//         navigate('/dashboard');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };

//   const handleSignupRedirect = () => {
//     navigate('/signup'); // Navigate to the signup page
//   };

//   return (
//     <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="access-container1">
//         <h2 className="access-title">Log In</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="button1">
//             Sign In
//           </Button>
//         </Form>

//         <div className="bottom mt-3">
//           <Form.Check
//             type="checkbox"
//             label="Remember me"
//             defaultChecked
//             name="remember"
//             className="cbox"
//           />
//           <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect} >Sign Up Here</Button></p>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Signup.css'; // Import the CSS file if needed
// import backgroundImage from '../Assets/img6.png';

// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [userName, setUserName] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/test/Login.php', formData);
//       if (response.data.status) {
//         setUserName(response.data.user_name); // Set user name
//         alert(`Welcome ${response.data.user_name}!`); // Show welcome message
//         navigate('/dashboard');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };

//   const handleSignupRedirect = () => {
//     navigate('/signup'); // Navigate to the signup page
//   };

//   return (
//     <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="access-container1">
//         <h2 className="access-title">Log In</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="button1">
//             Sign In
//           </Button>
//         </Form>

//         <div className="bottom mt-3">
//           <Form.Check
//             type="checkbox"
//             label="Remember me"
//             defaultChecked
//             name="remember"
//             className="cbox"
//           />
//           <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect}>Sign Up Here</Button></p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css';
import backgroundImage from '../Assets/img6.png';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState('');
 // const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  // Updated handleSubmit function in LoginForm
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const validationErrors = validateForm();
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }

//   try {
//     const response = await axios.post('http://localhost:8080/test/Login.php', formData);
//     if (response.data.status) {
//       const { user_name, user_role } = response.data;

//       setUserName(user_name);
//       localStorage.setItem('userName', user_name); // Store username in localStorage

//       setUserRole(user_role);
//       localStorage.setItem('userRole', user_role); // Store user role in localStorage

//       alert(`Welcome ${user_name}!`);
//       navigate('/dashboard');
//     } else {
//       alert(response.data.message);
//     }
//   } catch (error) {
//     alert('There was an error submitting the form. Please try again.');
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/test/Login.php', formData);
    if (response.data.status) {
      const { user_name, user_role } = response.data;
      console.log('User Role from API:', user_role); // Check user role in console

      setUserName(user_name);
      localStorage.setItem('userName', user_name); // Store username in localStorage

      localStorage.setItem('userRole', user_role); // Store user role in localStorage
      
      alert(`Welcome ${user_name}!`);
      navigate('/dashboard');
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    alert('There was an error submitting the form. Please try again.');
  }
};


  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="access-container1">
        <h2 className="access-title">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="button1">
            Sign In
          </Button>
        </Form>

        <div className="bottom mt-3">
          <Form.Check
            type="checkbox"
            label="Remember me"
            defaultChecked
            name="remember"
            className="cbox"
          />
          <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect}>Sign Up Here</Button></p>
        </div>
      </div>
    </div>
  );
}
