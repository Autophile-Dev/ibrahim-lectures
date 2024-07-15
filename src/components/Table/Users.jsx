import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import Swal from 'sweetalert2';
const Users = () => {

  const [userData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const responseData = await axios.get('http://localhost:5051/auth/users/all-user');
      setData(responseData.data.users);
      console.log(responseData.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (uID) => {
    const confirmationResult = await Swal.fire({
      'title': 'Confirm User Deletion',
      'text': 'Are you sure to want delete user data?',
      'icon': 'warning',
      'confirmButtonText': 'Yes, delete it',
      'cancelButtonText': 'Cancel'
    });
    if (confirmationResult.isConfirmed) {
      setLoading(false);
      try {
        const response = await axios.delete(`http://localhost:5051/auth/users/delete-user/${uID}`);
        setData(response.data.users);
        setLoading(false);
        Swal.fire({
          'icon': 'success',
          'title': 'User Deleted',
          'text': 'User has been deleted from the system',
          'showClass': {
            'popup': 'animate__animated animate__fadeInDown',
          },
          'hideClass': {
            'popup': 'animate__animated animate__fadeOutUp',
          }
        });
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div>
      <Link to={'/test'}>Shift to Button</Link>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell color='#f5f5f5'>First Name</TableCell>
              <TableCell color='#f5f5f5'>Last Name</TableCell>
              <TableCell color='#f5f5f5'>Phone No</TableCell>
              <TableCell color='#f5f5f5'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && <div>Loading Data....</div>}
            {!loading && userData.length !== 0 && userData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.phoneNum}</TableCell>
                <TableCell className='icons-container'>
                  <Link to={`/user/${item._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </Link>
                  <Link to={`/update-user/${item._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link>
                  <div onClick={() => handleDelete(item._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users
