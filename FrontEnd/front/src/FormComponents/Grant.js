// src/components/WizardForm.js
import React, { useState } from 'react';
import GrantApplicationForm from './GrantApplicationForm';
import GrantDetails from './GrantDetails';
import { useNavigate } from 'react-router-dom';

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    // Other form fields
  });
  const [grantRows, setGrantRows] = useState([
    { fundingSource: '', duration: '', currency: '', amount: '' },
  ]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRowChange = (index, event) => {
    const { name, value } = event.target;
    const newGrantRows = grantRows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setGrantRows(newGrantRows);
  };

  const handleAddRow = () => {
    setGrantRows([...grantRows, { fundingSource: '', duration: '', currency: '', amount: '' }]);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <GrantApplicationForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          errors={errors}
        />
      )}
      {step === 2 && (
        <GrantDetails
          grantRows={grantRows}
          handleChange={handleRowChange}
          handleAddRow={handleAddRow}
          handlePrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default WizardForm;
