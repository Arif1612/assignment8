import React from 'react';
import './Person.css'
const Person = (props) => {
    console.log('clicked');
    const { name, age, country, creditComplete, department, img, position } = props.person;
    return (
        <div className='person'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className='details'>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Credit Complete:{creditComplete}</h2>
                <h2>Department: {department}</h2>
                <h2>Position: {position}</h2>
                <h2>Country: {country}</h2>
                {/* thanda mathai korte hobe */}
                <button onClick={() => props.handleAddToCart(props.person)} className='add-button'>Add Member</button>
            </div>





        </div>
    );
};

export default Person;