import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Member.css'

const Member = () => {
    // states
    const [persons, setPersons] = useState();
    const [cart, setCart] = useState([]);

    // load from json
    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    // copy all cart product
    const handleAddToCart = (person) => {
        // console.log(person);
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className='member-container'>
            <div className='total-member'>
                <h1 className='member-count'>Member Details Shown: {persons.length} </h1>
                {
                    persons.map(person => <Person
                        person={person}
                        handleAddToCart={handleAddToCart}
                    >

                    </Person>)
                }

            </div>

            <div className='count-member'>

                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Member;