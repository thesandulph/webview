import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import background from './back.jpeg';
import './App.css';

const getCoursesList = () => {
  console.log('=> getCoursesList')
  return fetch('https://mocki.io/v1/6a9f8e88-45d4-447f-b41a-6333731a8fe7')
      .then((r) => {
        return r.json()
      });
}

const App = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    console.log('=> useEffect')
    getCoursesList().then(setCourses)
    return () => {
      console.log('=> UnMount')
    }
  }, [])
  return (
    <div className="App">
      <img src={background} className="App-background" alt="background" />
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
};

export default App;
