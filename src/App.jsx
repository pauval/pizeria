import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PizzaDetail from './components/PizzaDetail';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import HeaderBanner from './components/HeaderBanner';

const App = () => {
    return (
        <Router>
            <NavBar />
            <HeaderBanner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza/:id" element={<PizzaDetail />} />
                <Route path="/carrito" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default App;


