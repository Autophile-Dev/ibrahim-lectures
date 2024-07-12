import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewUser = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(id);
    const fetchUsersData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5051/auth/users/specific-user/${id}`);
            setData(response.data.user);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsersData();
    }, [id]);

    return (
        <div>
            <h1>{id}</h1>
            <hr />
            <span>Name: {data.firstName + '' + data.lastName}</span>
            <hr />
            <span>Phone Number: {data.phoneNum}</span>
            <hr />
            {/* <span>Email: {data.email}</span> */}
            {/* <span>{data.address}</span> */}
        </div>
    )
}

export default ViewUser
