import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Box, Card, Button, Typography, Divider} from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';
import {bridge} from '../bridge';
import {useGetCourses, useDidMount, CourseType} from '../hooks';
import {styles} from './courses.styles';

const Course = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState<CourseType | null>(null);
    const {getCourses} = useGetCourses();
    useDidMount(() => {
        bridge.native.setPageTitle('Course');
        bridge.loading.display(true);
        bridge.native.handleBack(() => {
            navigate(-1);
        });
        getCourses().then((courses) => {
            const course = courses.find(item => item.id.toString() === params.id);
            if (course) {
                bridge.native.setPageTitle(`Course: ${course.name}`);
                setCourse(course);
            }
        }).finally(() => {
            bridge.loading.display(false);
        });
    });
    return (
        <Box sx={styles.root}>
            <Box sx={styles.breadcrumb}>
                <Button size="small" onClick={() => navigate(-2)}>
                    Home
                </Button>
                <Button size="small" onClick={() => navigate(-1)}>
                    Courses
                </Button>
                <Button size="small" onClick={() => bridge.native.pressBack()}>
                    Back
                </Button>
            </Box>
            <Divider sx={styles.divider}/>
            <Divider/>
            {course && (
                <Card sx={styles.card}>
                    <LabelIcon/>
                    <Typography sx={styles.text}>
                        Learn {course.name}
                    </Typography>
                    <Button size="small" href={course.doc_url} target="_blank" rel="noopener, noreferer">
                        Read
                    </Button>
                </Card>
            )}
        </Box>
    );
};

export default Course;
