import React from 'react';

const Lunch = (props) => {
    // console.log(props)
    return (
        <div>
            <h3>{props.food.name}</h3>
            <p>{props.food.category}</p>
            {/* <img src={props.food.image} alt=""/> */}
        </div>
    );
};

export default Lunch;