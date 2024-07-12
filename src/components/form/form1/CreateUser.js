<<<<<<< HEAD
import React, { useState } from 'react'
import './form.css';
import axios from 'axios';
import Swal from 'sweetalert2';
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
      newUserFieldsErrors.phoneNumError = "Phone number is required";
      isValid = true;
    } else {
      newUserFieldsErrors.phoneNumError = "";
    }

    if (!userFields.password) {
      newUserFieldsErrors.passwordError = "Password is required";
      isValid = true;
    } else if (userFields.password.length < 6) {
      newUserFieldsErrors.passwordError = "Password should be 6 character long";
      isValid = true;
    }
    else {
      newUserFieldsErrors.passwordError = "";
    }

    setUserFieldsError(newUserFieldsErrors);


    const requestBody = {
      firstName: userFields.firstName,
      lastName: userFields.lastName,
      phoneNum: userFields.phoneNum,
      password: userFields.password,
    };

    if (isValid) {
      setIsLoading(true);
      try {
        const request = await axios.post('http://localhost:5051/auth/users/create-user', requestBody);
        if (request.status === 200) {
          setUserFields({
            firstName: '',
            lastName: '',
            phoneNum: '',
            password: ''
          });
          Swal.fire({
            icon: 'success',
            title: 'User has been created in system',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        } else if (request.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Error while creating user',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      } catch (error) {
        console.log(error);
      }
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
        <input type='password' name='password' value={userFields.password} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.passwordError}</span>

        <button className='add-user'>Add User</button>
      </form>
    </div>
  )
}

export default CreateUser
=======
import React, { useState } from 'react'
import './form.css';
import axios from 'axios';
import Swal from 'sweetalert2';
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
      newUserFieldsErrors.phoneNumError = "Phone number is required";
      isValid = true;
    } else {
      newUserFieldsErrors.phoneNumError = "";
    }

    if (!userFields.password) {
      newUserFieldsErrors.passwordError = "Password is required";
      isValid = true;
    } else if (userFields.password.length < 6) {
      newUserFieldsErrors.passwordError = "Password should be 6 character long";
      isValid = true;
    }
    else {
      newUserFieldsErrors.passwordError = "";
    }

    setUserFieldsError(newUserFieldsErrors);


    const requestBody = {
      firstName: userFields.firstName,
      lastName: userFields.lastName,
      phoneNum: userFields.phoneNum,
      password: userFields.password,
    };

    if (isValid) {
      setIsLoading(true);
      try {
        const request = await axios.post('http://localhost:5051/auth/users/create-user', requestBody);
        if (request.status === 200) {
          setUserFields({
            firstName: '',
            lastName: '',
            phoneNum: '',
            password: ''
          });
          Swal.fire({
            icon: 'success',
            title: 'User has been created in system',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        } else if (request.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Error while creating user',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      } catch (error) {
        console.log(error);
      }
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
        <input type='password' name='password' value={userFields.password} onChange={fieldChange} />
        <span className='error-message'>{userFieldsError.passwordError}</span>

        <button className='add-user'>Add User</button>
      </form>
    </div>
  )
}

export default CreateUser
>>>>>>> 2e40d1f987e26c709e47818521a90e0f835a9481
