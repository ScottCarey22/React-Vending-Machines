
import './App.css';
import React from 'react';
import Pretzels from './Pretzels';
import Reeses from './Reeses';
import Snickers from "./Snickers"
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/Reeses" element={<Reeses />} />
          <Route path="/Snickers" element={<Snickers />} />
          <Route path="/Pretzels" element={<Pretzels />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Route path='/' exact>
<VendingMachine />
</Route>
<Route path="/Reeces" exact>
<Reeces />
</Route>
<Route path="/Snickers" exact>
<Snickers />
</Route>
<Route path='/Pretzels' exact>
<Pretzels />
</Route> */}