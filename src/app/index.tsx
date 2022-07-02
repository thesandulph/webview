import React, {useEffect} from 'react';
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
import {useDidMount, useQueryParams, useSw} from '../hooks';
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
    const sw = useSw();
    const queryParams = useQueryParams(window.location.search);
    useDidMount(() => {
        if (queryParams.platform) {
            bridge.core.setup(queryParams.platform as PlatformType, event);
        }
    });
    console.log('=> SW 1', sw);
    useEffect(() => {
        if (sw.updated) {
            sw.skipWaiting();
        }
    }, [sw]);
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
