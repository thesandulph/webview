import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {bridge} from '../bridge';
import {useDidMount} from '../hooks';
import {styles} from './home.styles';

const Home = () => {
    const navigate = useNavigate();
    useDidMount(() => {
        bridge.native.setPageTitle('WebView Home');
    });
    return (
        <Box sx={styles.root}>
            <Card sx={styles.card}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        FrontEnd Libraries
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => navigate('/courses')}>
                        View List
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Home;
