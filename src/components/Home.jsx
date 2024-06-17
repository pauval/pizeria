import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../PizzaContext';
import './Home.css';
import { FaEye, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
    const { pizzas, addToCart } = useContext(PizzaContext);

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    return (
        <div className="home">
            {pizzas.map(pizza => (
                <div key={pizza.id} className="pizza-card">
                    <img src={pizza.img} alt={pizza.name} className="pizza-img" />
                    <h3 className="pizza-name">{pizza.name}</h3>
                    <div className="separator"></div>
                    <div className="pizza-ingredients">
                        <h4>Ingredientes</h4>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="separator"></div>
                    <div className="pizza-price">{formatPrice(pizza.price)}</div>
                    <div className="pizza-buttons">
                        <Link to={`/pizza/${pizza.id}`} className="btn btn-ver-mas">
                            Ver más <FaEye />
                        </Link>
                        <button onClick={() => addToCart(pizza)} className="btn btn-aniadir">
                            Añadir <FaShoppingCart />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
