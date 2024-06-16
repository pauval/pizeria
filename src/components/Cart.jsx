import React, { useContext } from 'react';
import { PizzaContext } from '../PizzaContext';

const Cart = () => {
    const { cart, setCart } = useContext(PizzaContext);

    const incrementQuantity = (pizza) => {
        const newCart = cart.map(item => 
            item.id === pizza.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCart(newCart);
    };

    const decrementQuantity = (pizza) => {
        const newCart = cart.map(item => 
            item.id === pizza.id && (item.quantity || 1) > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity !== 0);
        setCart(newCart);
    };

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * (pizza.quantity || 1), 0);

    return (
        <div>
            <h1>Carrito</h1>
            {cart.map(pizza => (
                <div key={pizza.id}>
                    <h2>{pizza.name}</h2>
                    <p>Precio: {pizza.price}</p>
                    <p>Cantidad: {pizza.quantity || 1}</p>
                    <button onClick={() => incrementQuantity(pizza)}>+</button>
                    <button onClick={() => decrementQuantity(pizza)}>-</button>
                </div>
            ))}
            <h3>Total a pagar: {totalPrice}</h3>
        </div>
    );
};

export default Cart;
