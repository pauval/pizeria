import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import './PizzaDetail.css';
import { FaShoppingCart } from 'react-icons/fa';

const PizzaDetail = () => {
    const { id } = useParams();
    const { pizzas, addToCart } = useContext(PizzaContext);
    const pizza = pizzas.find(p => p.id === id);

    if (!pizza) {
        return <p>Pizza no encontrada</p>;
    }

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    return (
        <div className="pizza-detail-card">
            <img src={pizza.img} alt={pizza.name} className="pizza-detail-img" />
            <div className="pizza-detail-info">
                <h3 className="pizza-detail-name">{pizza.name}</h3>
                <div className="separator"></div>
                <p className="pizza-detail-desc">{pizza.desc}</p>
                <div className="separator"></div>
                <div className="pizza-detail-ingredients">
                    <h4>Ingredientes</h4>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <span role="img" aria-label="Pizza Icon">🍕</span> {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="pizza-detail-footer">
                    <div className="pizza-detail-price">
                        <strong>Precio:</strong> {formatPrice(pizza.price)}
                    </div>
                    <button className="add-to-cart-button" onClick={() => addToCart(pizza)}>
                        Añadir <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaDetail;
