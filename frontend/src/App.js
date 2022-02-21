import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import FundsList from './Components/FundsList';

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <FundsList/>
   </React.Fragment>
  );
}

export default App;
