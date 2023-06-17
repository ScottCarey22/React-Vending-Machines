import React from 'react';
import pretzelsImg from "./PretzelsIMG.png"
import Message from './Message'
import { Link } from "react-router-dom"

const Pretzels = () => {
    return (
        <div className='Pretzels'>
            <img src={pretzelsImg} />
            <Message>
                <h1>The Original!</h1>
                <h1><Link to='/'>Want More?</Link></h1>
            </Message>
        </div>
    )
}
export default Pretzels;