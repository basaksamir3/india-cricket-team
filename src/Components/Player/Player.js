import React from 'react';
import fakeData from '../../fakeData';
import './Player.css';
import { useState } from 'react';
import PlayerList from '../PlayerList/PlayerList';
import Cart from '../Cart/Cart';

const Player = () => {
    const first10 = fakeData.slice(0, 11);
    
    const [products, setPlayers] = useState(first10);
    
    const[cart, setCart] = useState([]);

    const handleAddProduct = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart);
      }
    return (
        <div className="player">

            <div className="player-container">
                <h3>Total Player : {products.length}</h3>

                {
                    products.map(pl => <PlayerList product= {pl} key= {pl.key}handleAddProduct ={handleAddProduct}></PlayerList>)
                }

            </div>
            <div className="cart-container">
               
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Player;