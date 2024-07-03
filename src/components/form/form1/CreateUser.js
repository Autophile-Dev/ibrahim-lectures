import React, { useState } from 'react'
import './form.css';
const CreateUser = () => {
  const [userFields, setUserFields] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    password: '',
  });

  const [userFieldsError, setUserFieldsError] = useState({
    firstNameError: '',
    lastNameError: '',
    phoneNumError: '',
    passwordError: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  // Uploading data in database
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    const newUserFieldsErrors = { ...userFieldsError };


    if (!userFields.firstName) {
      newUserFieldsErrors.firstNameError = "First name is required";
      isValid = true;
    } else {
      newUserFieldsErrors.firstNameError = "";
    }

    if (!userFields.lastName) {
      newUserFieldsErrors.lastNameError = "Last name is required";
      isValid = true;
    } else {
      newUserFieldsErrors.lastNameError = "";
    }

    if (!userFields.phoneNum) {
      newUserFieldsErrors.firstNameError = "Phone number is required";
      isValid = true;
    } else {
      newUserFieldsErrors.phoneNumError = "";
    }

    if (!userFields.password) {
      newUserFieldsErrors.firstNameError = "Password is required";
      isValid = true;
    } else if (userFields.password.length < 6) {
      newUserFieldsErrors.firstNameError = "Password should be 6 character long";
      isValid = true;
    }
    else {
      newUserFieldsErrors.firstNameError = "";
    }

    
  }
  // Handling Fields
  const fieldChange = (e) => {
    const { name, value } = e.target;
    setUserFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  }
  return (
    <div>
      <form className='form-create-user' onSubmit={handleSubmit}>

        <label>First Name</label>
        <input type='text' name='firstName' value={userFields.firstName} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.firstNameError}</span>

        <label>Last Name</label>
        <input type='text' name='lastName' value={userFields.lastName} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.lastNameError}</span>

        <label>Phone No</label>
        <input type='text' name='phoneNum' value={userFields.phoneNum} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.phoneNumError}</span>

        <label>Password</label>
        <input type='text' name='password' value={userFields.password} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.passwordError}</span>

        <button className='add-user'>Add User</button>
      </form>
    </div>
  )
}

export default CreateUser
