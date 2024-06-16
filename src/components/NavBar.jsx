import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
    const { cart } = useContext(PizzaContext);

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="home-link">
                    <FaPizzaSlice className="icon" />
                    <span>Pizzería Mamma Mia!</span>
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/carrito" className="cart-link">
                    <FaShoppingCart className="icon" />
                    <span>${totalPrice}</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
