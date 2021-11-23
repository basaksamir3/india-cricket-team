import React from 'react';
import'./Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt,faDollarSign } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {

    const cart = props.cart;

    const toltalCost = cart.reduce((total, prd) => total + prd.salary, 0);

    return (
        <div className = 'cart-style'>
            <h1>Budget Of Team:</h1>
            <h3>Total Add Player: {cart.length}</h3>
            
            {
                cart.map (pd => <p><FontAwesomeIcon icon={faUserAlt} /> {pd.name} <FontAwesomeIcon icon={faDollarSign} /> {pd.salary}</p>)
            }
            <p><span className="total">Total Cost: ${toltalCost}</span></p>
        </div>
    );
};

export default Cart;