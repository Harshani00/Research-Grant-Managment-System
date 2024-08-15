import React from 'react';
import { useDropzone } from 'react-dropzone';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Budget.css'; // Import the CSS file
import Navbar from '../Components/Navbar'; 

function DragAndDrop() {
  const {
    getRootProps: getRootProps4,
    getInputProps: getInputProps4,
    acceptedFiles: acceptedFiles4
  } = useDropzone();

  const {
    getRootProps: getRootProps5,
    getInputProps: getInputProps5,
    acceptedFiles: acceptedFiles5
  } = useDropzone();

 
  const files3 = acceptedFiles4.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const files5 = acceptedFiles5.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <Navbar />
      <div className="label-container3">
        <Form.Label>1. Upload Progress Report</Form.Label>
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps4({ className: 'dropzone' })}>
          <input {...getInputProps4()} />
          <p>Drag & drop some files here, or click to select files</p>
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>{files3}</ul>
        </aside>
      </Card>

      <div className="label-container3">
        <Form.Label>2. Upload Presentation</Form.Label>
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps5({ className: 'dropzone' })}>
          <input {...getInputProps5()} />
          <p>Drag & drop some files here, or click to select files</p>
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>{files5}</ul>
        </aside>
      </Card>
      <div >
        <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
      </div>

     
    </div>
  );
}

export default DragAndDrop;
