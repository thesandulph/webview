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
import {useSw} from '../hooks';
import Course from './course';
import Courses from './courses';
import Home from './home';
import WebApp from './web-app';
import Wrapper from './wrapper';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const sw = useSw();
    useEffect(() => {
        console.log('=> check SW 2')
        if (sw.updated) {
            console.log('=> has update without skip waiting')
            // sw.skipWaiting();
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
                        <Route
                            path="app/"
                            element={<WebApp />}
                        />
                    </Routes>
                </BrowserRouter>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
