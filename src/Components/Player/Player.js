import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import "./Player.css"


const Player = (props) => {

   ;
    const{playerName,Image, salary}= props.player;
    const{handleAddPlayer}= props;
    
    const divStyle={
        display:'flex',
        border: '2px solid black',
        borderRadius: '20px',
        backgroundColor: 'lightgray',
        margin: '20px',
        padding: '30px',
        width: '100%'
        
    }
    const imgStyle={
        height:'100%',
        width: '40%'
    }

   
    return (
        <div  >
            <div style={divStyle}>
            <div>
                <img  style={imgStyle} src={Image} alt=""/>
            </div>
            <div style={{marginLeft:'80px'}}>
                <h3>{playerName} </h3>
                <p>Salary $ {salary}</p>
                <br/>
                <br/>
                <br/>
                <button className='addButton' onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add Player</button>

            </div>
            
            </div>
            
            
            
        </div>
    );
};

export default Player;