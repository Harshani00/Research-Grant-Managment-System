// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Budget.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';

// const DragAndDropBox = () => {
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: acceptedFiles => {
//       console.log(acceptedFiles);
//     }
//   });

//   return (
//     <div>
//       <Navbar />
//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>

//       <div className="label-container">
//         <Form.Label>2. Upload Current Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop additional file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//     </div>
//   );
// };

// export default DragAndDropBox;
// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Budget.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';

// const DragAndDropBox = () => {
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'application/pdf', // Accept only PDF files
//     onDrop: acceptedFiles => {
//       // Handle the uploaded files here
//       acceptedFiles.forEach(file => {
//         console.log(file);
//         // Implement file upload logic here if needed
//       });
//     }
//   });

//   return (
//     <div>
//       <Navbar />
//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>

//       <div className="label-container">
//         <Form.Label>2. Upload Current Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop additional file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//     </div>
//   );
// };

// export default DragAndDropBox;
// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


// function DragAndDrop() {
//   const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <Card className="text-center" style={{ padding: '20px', border: '2px dashed #007bff' }}>
//       <div {...getRootProps({ className: 'dropzone' })} style={{ padding: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some files here, or click to select files</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//       <aside>
//         <h6>Files:</h6>
//         <ul>{files}</ul>
//       </aside>
//     </Card>
//   );
// }

// export default DragAndDrop;

import React from 'react';
import { useDropzone } from 'react-dropzone';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Budget.css'; // Import the CSS file
import Navbar from '../Components/Navbar'; 

function DragAndDrop() {
  const {
    getRootProps: getRootProps1,
    getInputProps: getInputProps1,
    acceptedFiles: acceptedFiles1
  } = useDropzone();

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    acceptedFiles: acceptedFiles2
  } = useDropzone();

  const files1 = acceptedFiles1.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const files2 = acceptedFiles2.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <Navbar />
      <div className="label-container1">
        <Form.Label>1. Upload Previous Budget Revision</Form.Label>
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps1({ className: 'dropzone' })}>
          <input {...getInputProps1()} />
          <p>Drag & drop some files here, or click to select files</p>
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>{files1}</ul>
        </aside>
      </Card>

      <div className="label-container2">
        <Form.Label>2. Upload Current Budget Revision</Form.Label>
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps2({ className: 'dropzone' })}>
          <input {...getInputProps2()} />
          <p>Drag & drop some files here, or click to select files</p>
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>{files2}</ul>
        </aside>
      </Card>
    </div>
  );
}

export default DragAndDrop;
