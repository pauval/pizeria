import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
    const { cart } = useContext(PizzaContext);

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);
    
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="home-link">
                    <div className="pizza-home">
                        <span>Pizzería Mamma Mia!</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/carrito" className="cart-link">
                    <div className="cart-home">
                        <FaShoppingCart className="icon" />
                        <span>{formatPrice(totalPrice)}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
