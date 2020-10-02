import React from 'react';

const CourseDetails = (props) => {
    const cart = props.cart;
    console.log(props)
    const coursePrice = cart.reduce((sum, item) => sum + item.coursePrice,0)
    return (
        <div>
            <h1>Number of Subject:{cart.length} </h1>
            
            <h1>Subject list: </h1> 
            {
                cart.map(cart => <li> {cart.course} </li> )
            }
            
            
                <h1>Course price:</h1>
                {
                    cart.map(course => <li> {course.coursePrice}</li> )
                }
            
            <h1>Total course Price: {coursePrice} </h1>
            
        </div>
    );
};

export default CourseDetails;
