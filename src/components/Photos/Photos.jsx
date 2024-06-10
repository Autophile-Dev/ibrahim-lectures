import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './photos.css';
import axios from 'axios';
const Photos = () => {
    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchPhotos = async () => {
        try {
            setLoading(true);
            const photoData = await axios.get('https://jsonplaceholder.typicode.com/photos?id=1');
            setPhotoData(photoData.data);
            console.log(photoData.data);
            setLoading(false)
        } catch (err) {
            console.log('Error', err);
        }
    }

    useEffect(() => {
        fetchPhotos();
    }, []);
    return (
        <div className='photos-container'>
            {loading && <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>}
            {photoData && photoData.map((data, key) => (
                <Card sx={{ maxWidth: 200 }} key={key}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.thumbnailUrl}
                            alt={data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}

export default Photos
