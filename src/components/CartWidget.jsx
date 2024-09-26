import React, { useState } from 'react';
import './CartWidget.css';
import cart from "../assets/cart.svg"


const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleCartClick = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="cart-widget" onClick={handleCartClick}>
            <img className="cart-icon" src={cart} alt="cart" />
            <span className="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartWidget;
