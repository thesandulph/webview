import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Card, Button, Divider, Typography} from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {bridge} from '../bridge';
import {useGetCourses, useDidMount} from '../hooks';
import {styles} from './courses.styles';

const Courses = () => {
    const navigate = useNavigate();
    const {courses, getCourses} = useGetCourses();
    useDidMount(() => {
        bridge.native.setPageTitle('Courses List');
        bridge.loading.display(true);
        getCourses().finally(() => {
            bridge.loading.display(false);
        });
    })
    return (
        <Box sx={styles.root}>
            <Box sx={styles.breadcrumb}>
                <Button size="small" onClick={() => navigate(-2)}>
                    Home
                </Button>
                <Button size="small" onClick={() => bridge.native.goBack()}>
                    Exit from WebView
                </Button>
            </Box>
            <Divider sx={styles.divider}/>
            {courses.map((item, index) => (
                <Card key={`courses-${item.id}`} sx={styles.card} onClick={() => navigate(`/courses/${item.id}`)}>
                    <LabelIcon/>
                    <Typography sx={styles.text}>
                        Learn {item.name}
                    </Typography>
                    <ArrowForwardIosIcon fontSize="small"/>
                </Card>
            ))}
        </Box>
    );
};

export default Courses;
