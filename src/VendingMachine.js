import React from "react";
import { Link } from 'react-router-dom'
import Message from './Message'
import vendingmachine from "./vendingmachine.png"
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div
            className="VendingMachine"
            style={{ backgroundImage: `url(${vendingmachine})` }}>
            <Message>
                <h1>What would you like from my Vending Machine?</h1>
            </Message>
            <Message>
                <h1><Link to='/Reeses'>Reese's</Link></h1>
                <h1><Link to='/Snickers'>Snickers</Link></h1>
                <h1><Link to='/Pretzels'>Pretzels</Link></h1>
            </Message>
        </div >
    )


}

export default VendingMachine;

