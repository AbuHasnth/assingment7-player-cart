import logo from './logo.svg';
import data from './data/playerData.json'
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Cart from './Components/Cart/Cart';
import './App.css'

function App() {

  const [player, setPlayer]= useState([]);
  const [cart, setCart]= useState([]);
  const handleAddPlayer=(player)=>{
    const newCart= [...cart, player ];
    setCart(newCart);
  }
  console.log(cart)



  useEffect(()=>{
    setPlayer(data);
  },[]);
 

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '50%'}}>
        <h1>Player Selection</h1>
        <div className="allPlayer">
          {
            player.map(player=><Player handleAddPlayer={handleAddPlayer} player={player}></Player>)
          }
        </div>
      </div>
      <div style={{width: '35%'}}>
            <Cart cart={cart}></Cart>
      </div>
        
    </div>
  );
}

export default App;
