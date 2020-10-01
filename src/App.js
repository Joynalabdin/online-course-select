import React, { useEffect, useState } from 'react';
import './App.css';
import Course from './Component/Course/Course';
import CourseDetails from './Component/CourseDetails/CourseDetails';

function App() {
  const [student, setStudent] = useState([])
  const [cart,setCart] = useState([])


  useEffect(() => {
    fetch("http://www.json-generator.com/api/json/get/cfXrArBuDC?indent=2")
    .then(res=> res.json())
    .then(data=>{
      setStudent(data);
    })
    .catch(err => console(err));
  }, []);

    const handleCourseAdd = (course) =>{
      const newCart = [...cart,course]
      setCart(newCart)
    }



  return (
    <div className="App">
      <h1>Course number:{student.length}</h1>
      <h1>Course Description:{cart.length} </h1>
      <CourseDetails cart={cart} ></CourseDetails>

      <ul>
        {
        student.map(student =><Course st={student} course={handleCourseAdd} key={student.coursePrice} ></Course>)
        }
      </ul>
     
    </div>
  );
}

export default App;
