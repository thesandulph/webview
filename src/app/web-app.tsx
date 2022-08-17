import React from 'react';
import {Box, Card, CardContent, CardMedia, Divider, Typography} from '@mui/material';
import {bridge} from '../bridge';
import {useDidMount} from '../hooks';
import {styles} from './home.styles';

const WebApp = () => {
    useDidMount(() => {
        bridge.native.page({
            title: 'WebApp Main Page',
        });
    });
    return (
        <Box sx={styles.root}>
            <Divider sx={styles.divider}/>
            <Card sx={styles.card}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        WebApp HomePage
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default WebApp;
