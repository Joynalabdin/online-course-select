import React from 'react';

const CourseDetails = (props) => {
    const cart = props.cart;
    console.log(props)
    const coursePrice = cart.reduce((sum, item) => sum + item.coursePrice,0)
    return (
        <div>
            <h1>This is cart:{cart.length} </h1>
            <h1>course Price: {coursePrice} </h1>
        </div>
    );
};

export default CourseDetails;
