import React from 'react';
import './Cart.css'

const Cart = (props) => {


    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const person of cart) {
        total = total + person.creditComplete;
    }

    return (
        <div>
            <h2>Add Member</h2>
            <h2>length:{props.cart.length}</h2>
            <h2>CreditComplete:{total}</h2>

        </div>
    );
};

export default Cart;