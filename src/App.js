import React, { useEffect, useState } from 'react';
import './App.css';
import Course from './Component/Course/Course';
import CourseDetails from './Component/CourseDetails/CourseDetails';
import SubjectAdd from './Component/SubjectAdd/SubjectAdd';

function App() {
  const [student, setStudent] = useState([])
  const [cart,setCart] = useState([])
  const [subject,setSubject] = useState([])


  useEffect(() => {
    fetch("http://www.json-generator.com/api/json/get/cfXrArBuDC?indent=2")
    .then(res=> res.json())
    .then(data=>{
      setStudent(data);
    })
    .catch(err => console(err));
  }, []);

    const handleCourseAdd = (course,name) =>{
      const newCart = [...cart,course]
      setCart(newCart)
      const newSubject = [...subject,name]
      setSubject(newSubject)
    }



  return (
    <div className="App">
      <h1>Course number:{student.length}</h1>
      <SubjectAdd></SubjectAdd>
      <CourseDetails cart={cart} ></CourseDetails>
      <SubjectAdd cartPass={subject} ></SubjectAdd>
      <ul>
        {
        student.map(student =><Course st={student} course={handleCourseAdd} key={student.coursePrice} ></Course>)
        }
      </ul>
     
    </div>
  );
}

export default App;
