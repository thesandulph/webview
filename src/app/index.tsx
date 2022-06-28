import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import {useDidMount, useQueryParams} from '../hooks';
import {bridge, event, PlatformType} from '../bridge';
import Course from './course';
import Courses from './courses';
import Home from './home';
import Wrapper from './wrapper';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const queryParams = useQueryParams(window.location.search);
    console.log('=> queryParams')
    useDidMount(() => {
        if (queryParams.platform) {
            bridge.core.setup(queryParams.platform as PlatformType, event);
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Wrapper>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="courses/"
                            element={<Courses />}
                        />
                        <Route
                            path="courses/:id"
                            element={<Course />}
                        />
                    </Routes>
                </BrowserRouter>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
