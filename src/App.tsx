import React, {useState} from 'react';
import {
    CourseType,
    useDidMount,
    useGetCourses,
    useQueryParams,
    useSw,
} from './hooks';
import {
    event,
    bridge,
    PlatformType,
    FileUploadPayloadType,
} from './bridge';
import logo from './logo.svg';
import './App.css';

function App() {
    const [state, setState] = useState({type: '', status: '', message: ''});
    const queryParams = useQueryParams(window.location.search);
    const {courses, getCourses} = useGetCourses();
    const sw = useSw();
    useDidMount(() => {
        getCourses();
        if (queryParams.platform) {
            bridge.core.setup(queryParams.platform as PlatformType, event);
        }
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {sw.updated && (
                    <>
                        <div>
                            There is a new service worker available
                            <button onClick={sw.skipWaiting}>
                                Update
                            </button>
                        </div>
                        <br/>
                    </>
                )}
                <div>
                    <button onClick={() => bridge.native.setPageTitle('WebView Improvement')}>
                        Set Page Title to WebView Improvement
                    </button>
                    <br/>
                    <button onClick={() => bridge.loading.display(true)}>Loading</button>
                    <button onClick={bridge.native.goBack}>Go Back</button>
                    <button onClick={() => {
                        bridge.confirm.display({
                            title: 'Confirm box title',
                            message: 'Confirm box description is here',
                            resolveButton: 'Accept',
                            rejectButton: 'Cancel',
                        })
                            .then((r) => {
                                setState({
                                    type: 'confirm',
                                    status: 'resolve',
                                    message: JSON.stringify(r),
                                });
                            })
                            .catch((c) => {
                                setState({
                                    type: 'confirm',
                                    status: 'error',
                                    message: JSON.stringify(c),
                                });
                            })
                    }}>
                        Confirm
                    </button>
                    <button onClick={() => {
                        bridge.file.upload({} as FileUploadPayloadType)
                            .then((r) => {
                                setState({
                                    type: 'upload',
                                    status: 'resolve',
                                    message: JSON.stringify(r),
                                });
                            })
                            .catch((c) => {
                                setState({
                                    type: 'upload',
                                    status: 'error',
                                    message: JSON.stringify(c),
                                });
                            })
                    }}>
                        Upload
                    </button>
                </div>
                {state.type && (
                    <p>{state.type}: {state.status} - {state.message}</p>
                )}
                <br/>
                {courses.map((course: CourseType, index) => (
                    <div key={`course-item-${course.id}`}>
                        <a
                            className="App-link"
                            href={course.doc_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn {course.name}
                        </a>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;
