import React, {useEffect, useState} from 'react';
import {bridge, FileUploadPayloadType} from './bridge';
import logo from './logo.svg';
import background from './back.jpeg';
import './App.css';

const getCoursesList = () => {
    return fetch('https://mocki.io/v1/6a9f8e88-45d4-447f-b41a-6333731a8fe7')
        .then((r) => {
            return r.json()
        });
}

const App = () => {
    const [confirm, setConfirm] = useState({status: '', message: ''});
    const [state, setState] = useState({status: '', message: ''});
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const [, search] = window.location.search.split('?');
        const qp: any = search.split('&').reduce((accumulator, item) => {
            const [key, value] = item.split('=');
            return {
                ...accumulator,
                [key]: value,
            }
        }, {});
        console.log('=====>', qp.platform)
        if (qp.platform) {
            bridge.core.setup(qp.platform)
        }
        getCoursesList().then(setCourses)
    }, [])
    return (
        <div className="App">
            <img src={background} className="App-background" alt="background"/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <button onClick={() => bridge.native.setPageTitle('WebView Improvement')}>Set Page Title to WebView
                        Improvement
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
                                    status: 'resolve',
                                    message: JSON.stringify(r),
                                });
                            })
                            .catch((c) => {
                                setState({
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
                                setConfirm({
                                    status: 'resolve',
                                    message: JSON.stringify(r),
                                });
                            })
                            .catch((c) => {
                                setConfirm({
                                    status: 'error',
                                    message: JSON.stringify(c),
                                });
                            })
                    }}>
                        Upload
                    </button>
                </div>
                {confirm.status && <p>{confirm.status}: {confirm.message}</p>}
                {state.status && <p>{state.status}: {state.message}</p>}
                <br/>
                {courses.map((course: any, index) => (
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
};

export default App;
