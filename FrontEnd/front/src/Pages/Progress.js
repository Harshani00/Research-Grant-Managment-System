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

 
  const files3 = acceptedFiles4.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

 

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

     
    </div>
  );
}

export default DragAndDrop;
