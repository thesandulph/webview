import React, {useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

export const useEffectOnce = (effect) => {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [val, setVal] = useState(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    setVal((val) => val + 1);

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
};

const getCoursesList = () => {
  console.log('=> getCoursesList')
  return fetch('https://mocki.io/v1/6a9f8e88-45d4-447f-b41a-6333731a8fe7')
      .then((r) => {
        return r.json()
      });
}

function App() {
  const [courses, setCourses] = useState([]);
  useEffectOnce(() => {
    console.log('=> useEffect')
    getCoursesList().then(setCourses)
    return () => {
      console.log('=> UnMount')
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {courses.map((course, index) => (
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
