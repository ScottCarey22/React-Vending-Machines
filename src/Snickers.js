import React from 'react';
import SnickersIMG from "./SnickersIMG.png"
import Message from './Message'
import { Link } from 'react-router-dom';
const Snickers = () => {
    return (
        <div className='Snickers'>
            <img src={SnickersIMG} />
            <Message>
                <h1>Hungry??? Grab a Snickers</h1>
                <h1><Link to='/'>Want More?</Link></h1>
            </Message>
        </div>
    )
}
export default Snickers;