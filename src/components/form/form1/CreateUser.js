import React, { useState } from 'react'

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
      <form onSubmit={handleSubmit}>
        <input type='text'/>
      </form>
    </div>
  )
}

export default CreateUser
