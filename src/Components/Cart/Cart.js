import React from 'react';
import SelectedP from '../SelectedPlayer/SelectedP';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const cartStyle={
        border: '2px solid black',
        borderRadius: '20px',
        backgroundColor: 'lightblue',
        padding: '30px',
        marginTop: '24px',
        height: 'auto'
    }
    const divStyle={
        marginLeft: '113px',
        marginRight: '-231px'
    }
    const totalBudget= cart.reduce((total,players)=>parseInt(total)+ parseInt(players.salary),0);
    // console.log(totalBudget)

    
    
    return (
        <div>
          
            <div  style={ divStyle} >
                <h1 >Review Selection</h1>
                <h2 className='budgetStyle'>Total Budget 
                <br/>
                {totalBudget}
                             </h2>
            <ul >
                {
                    // cart.map(player => <p>{player.playerName}</p>)
                    cart.map(player=><SelectedP player={player}></SelectedP>)
                }
                
            </ul>
            </div>

        </div>
    );
};

export default Cart;