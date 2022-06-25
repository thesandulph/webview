import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {createStore, actions} from "./store";

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
    onReady: (registration: any) => {
        console.log('=> onReady', registration);
        store.dispatch(actions.sw.ready(registration));
    },
    onUpdate: (registration: any) => {
        console.log('=> onUpdate', registration);
        store.dispatch(actions.sw.update(registration));
    },
    onSuccess: (registration: any) => {
        console.log('=> onSuccess', registration);
    },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
