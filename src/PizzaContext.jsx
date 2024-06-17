import React, { createContext, useState, useEffect } from 'react';
import pizzasData from './pizzas.json';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPizzas(pizzasData);
    }, []);

    // Función para formatear el precio
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    const addToCart = (pizzaToAdd) => {
        const existingPizza = cart.find(pizza => pizza.id === pizzaToAdd.id);

        if (existingPizza) {
            const updatedCart = cart.map(pizza =>
                pizza.id === pizzaToAdd.id ? { ...pizza, quantity: (pizza.quantity || 1) + 1 } : pizza
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...pizzaToAdd, quantity: 1 }]);
        }
    };

    const incrementQuantity = (pizzaToUpdate) => {
        const updatedCart = cart.map(pizza =>
            pizza.id === pizzaToUpdate.id ? { ...pizza, quantity: (pizza.quantity || 1) + 1 } : pizza
        );
        setCart(updatedCart);
    };

    const decrementQuantity = (pizzaToUpdate) => {
        const updatedCart = cart.map(pizza =>
            pizza.id === pizzaToUpdate.id ? { ...pizza, quantity: (pizza.quantity || 1) - 1 } : pizza
        ).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    return (
        <PizzaContext.Provider value={{ pizzas, setPizzas, cart, addToCart, incrementQuantity, decrementQuantity, formatPrice }}>
            {children}
        </PizzaContext.Provider>
    );
};
