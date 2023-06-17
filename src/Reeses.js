import React from 'react';
import { Link } from 'react-router-dom';
import Message from "./Message";
import "./Reeses.css"
import ReesesIMG from './ReesesIMG.png'



const Reeses = () => {
    return (
        <div className='Reeses'>
            <img src={ReesesIMG} />
            <Message>
                <h1>THE CREAMY GOODNESS</h1>
                <h1><Link to='/'>Want More?</Link></h1>
            </Message>
        </div>
    )
}
export default Reeses;
