import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const responseData = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(responseData.data);
      console.log(responseData.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div>
      <Link to={'/test'}>Shift to Button</Link>
      <TableContainer>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell color='#f5f5f5'>Name</TableCell>
              <TableCell color='#f5f5f5'>Email</TableCell>
              <TableCell color='#f5f5f5'>Phone No</TableCell>
              <TableCell color='#f5f5f5'>Website</TableCell>
              <TableCell color='#f5f5f5'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && <div>Loading Data....</div>}
            {data && data.map((userData, key) => (
              <TableRow key={key}>
                <TableCell>{userData.id}</TableCell>
                <TableCell>{userData.name}</TableCell>
                <TableCell>{userData.email}</TableCell>
                <TableCell>{userData.phone}</TableCell>
                <TableCell>{userData.website}</TableCell>
                <TableCell>
                  <Link to={`/user/${userData.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </Link>
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
