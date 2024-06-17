import React, { useContext } from 'react';
import { PizzaContext } from '../PizzaContext';
import './Cart.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, formatPrice } = useContext(PizzaContext);
    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);

    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cart.map(pizza => (
                    <div key={pizza.id} className="pizza-cart-card">
                        <img src={pizza.img} alt={pizza.name} className="pizza-cart-img" />
                        <div className="pizza-cart-info">
                            <h2>{pizza.name}</h2>
                            <p>Precio unitario: {formatPrice(pizza.price)}</p>
                            <p>Cantidad: {pizza.quantity}</p>
                            <div className="button-group">
                                <button onClick={() => incrementQuantity(pizza)} className="btn btn-agregar">
                                    <FaPlus /> Añadir
                                </button>
                                <button onClick={() => decrementQuantity(pizza)} className="btn btn-eliminar">
                                    <FaMinus /> Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <h3>Total a pagar: {formatPrice(totalPrice)}</h3>
        </div>
    );
};

export default Cart;
