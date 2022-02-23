import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import FundsList from './Components/FundsList';
import TOTALinp from './Components/TOTALinp';

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <TOTALinp/>
     <FundsList/>
   </React.Fragment>
  );
}

export default App;
