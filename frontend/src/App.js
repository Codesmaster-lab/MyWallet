import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import FundsList from './Components/FundsList';
import TOTALinp from './Components/TOTALinp';
import TOTALSAV1 from './Components/TOTALSAV1';
import TOTALSAV2 from './Components/TOTALSAV2';

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <TOTALinp/>
     <TOTALSAV1/>
     <TOTALSAV2/>
     <FundsList/>
   </React.Fragment>
  );
}

export default App;
