import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
      <TableContainer>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell color='#f5f5f5'>Name</TableCell>
              <TableCell color='#f5f5f5'>Email</TableCell>
              <TableCell color='#f5f5f5'>Phone No</TableCell>
              <TableCell color='#f5f5f5'>Website</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users
