import React, { createContext, useState, useEffect } from 'react';
import pizzasData from './pizzas.json';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPizzas(pizzasData);
    }, []);

    const addToCart = (pizzaToAdd) => {
        const existingPizza = cart.find(pizza => pizza.id === pizzaToAdd.id);

        if (existingPizza) {
            const updatedCart = cart.map(pizza =>
                pizza.id === pizzaToAdd.id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...pizzaToAdd, quantity: 1 }]);
        }
    };

    return (
        <PizzaContext.Provider value={{ pizzas, setPizzas, cart, addToCart }}>
            {children}
        </PizzaContext.Provider>
    );
};
