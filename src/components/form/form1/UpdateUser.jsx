import React, { useEffect, useState } from 'react'
import './form.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
const UpdateUser = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(id);
    const fetchUsersData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5051/auth/users/specific-user/${id}`);
            setData(response.data.user);
            setUserFields(response.data.user);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsersData();
    }, [id]);


    const [isLoading, setIsLoading] = useState(false);
    const [userFields, setUserFields] = useState({
        firstName: '',
        lastName: '',
        phoneNum: '',
    });

    const [userFieldsError, setUserFieldsError] = useState({
        firstNameError: '',
        lastNameError: '',
        phoneNumError: '',
    });
    // Handling Fields
    const fieldChange = (e) => {
        const { name, value } = e.target;
        setUserFields({ ...userFields, [name]: value });
    }
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


        setUserFieldsError(newUserFieldsErrors);


        const requestBody = {
            firstName: userFields.firstName,
            lastName: userFields.lastName,
            phoneNum: userFields.phoneNum,

        };

        if (isValid) {
            setIsLoading(true);
            try {
                const request = await axios.put(`http://localhost:5051/auth/users/update-user/${id}`, requestBody);
                if (request.status === 200) {
                    setUserFields({
                        firstName: '',
                        lastName: '',
                        phoneNum: '',
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'User has been updated in system',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown',
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/user';
                        }
                    })

                } else if (request.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error while updating user',
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



                <button className='add-user'>Update User</button>
            </form>
        </div>
    )
}

export default UpdateUser
