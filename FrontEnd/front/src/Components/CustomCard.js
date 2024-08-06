import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CustomCard.css';

export default function CustomCard({ title, buttonText, linkTo }) {
  const navigate = useNavigate();

  return (
    <Card className="custom-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Button className="custom-button" onClick={() => navigate(linkTo)}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
