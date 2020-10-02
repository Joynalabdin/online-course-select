import React from 'react';


const Course = (props) => {
    const { course, coursePrice, gender, age, email, name, picuture } = props.st;
    const handleCourseAdd = props.course;
    const courseStyle = {
        border: "3px solid green",
        margin: '5px',
        padding: '9px',
        textAlign: "center",
        borderRadius: "9px",
        backgroundColor:"gray",
        color: "white"
    }
    
    return (
        <div className="App" style={courseStyle} >
            <img src={picuture} alt="" />
            <p>Teacher name: {name} </p>
            <p>Teacher email: {email} </p>
            <p>Gendr: {gender} </p>
            <p>Age: {age} </p>
            <p>Subject: {course} </p>
            <p>Subject Price: {coursePrice} </p>
            <button 
            style={{width:'100px',height:"39px",borderRadius:"5px"}}
             onClick={() => handleCourseAdd(props.st)}
             >Enroll Now</button>
        </div>
    );
};

export default Course;