// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MainForm = createContext();

// export function useForm() {
//   return useContext(MainForm);
// }

// export function FormProvider({ children }) {
//   const [formData, setFormData] = useState(() => {
//     // Initialize formData from localStorage if available
//     const savedData = localStorage.getItem('formData');
//     return savedData ? JSON.parse(savedData) : {
//       title: '',
//       name: '',
//       faculty: '',
//       department: '',
//       email: '',
//       phone: '',
//       position: '',
//       degree: '',
//       university: '',
//       year: '',
//       field: '',
//       start_date: '',
//       duration: ''
//     };
//   });

//   useEffect(() => {
//     // Save formData to localStorage whenever it changes
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   const handleFormDataChange = (newData) => {
//     setFormData(prevData => ({ ...prevData, ...newData }));
//   };

//   return (
//     <MainForm.Provider value={{ formData, handleFormDataChange }}>
//       {children}
//     </MainForm.Provider>
//   );
// }

import React, { createContext, useContext, useState, useEffect } from 'react';

const MainForm = createContext();

export function useForm() {
  return useContext(MainForm);
}

export function FormProvider({ children }) {
  const [formData, setFormData] = useState(() => {
    // Initialize formData from localStorage if available
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
        title: '',
        name: '',
        faculty: '',
        department: '',
        email: '',
        phone: '',
        position: '',
        degree: '',
        university: '',
        year: '',
        field: '',
        start_date: '',
        duration: '',
        projectTitle:'',
        fundingSource:'',
        durationperiod:'',
        currency:'',
        amount:'',
        projectInvolved:'',
        publication1:'',
        publication2:'',
        publication3:'',
        co_investigators:'',
        co_investigator_name:'',
        co_investigator_department:'',
        co_investigator_university:'',
        foreign_collaborators:'',
        foreign_collaborator_name:'',
        foreign_collaborator_university:'',
        reviewer1Name:'',
        reviewer2Name:'',
        reviewer3Name:'',
        reviewer1Email:'',
        reviewer2Email:'',
        reviewer3Email:'',
        reviewer1Affiliation:'',
        reviewer2Affiliation:'',
        reviewer3Affiliation:'',

    };

    
    
  });
  const handleFormDataFilesChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  useEffect(() => {
    // Save formData to localStorage whenever it changes
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleFormDataChange = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <MainForm.Provider value={{ formData, handleFormDataChange, handleFormDataFilesChange }}>
      {children}
    </MainForm.Provider>
  );
}
