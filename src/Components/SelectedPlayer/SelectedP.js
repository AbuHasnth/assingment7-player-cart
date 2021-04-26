import React from 'react';
import './SelectedP.css'

const SelectedP = (props) => {
    const {playerName,Image,salary}= props.player;
    return (

       

        <div className='playerDiv'> 
            <div >
            <img className='playerImage' src={Image}></img>
            </div>
            <div style={{textAlign:'center'}}>
                <h1>{playerName}</h1>
                <h2>Salary required : $ {salary}</h2>
                
            </div>

        </div>
    );
};

export default SelectedP;