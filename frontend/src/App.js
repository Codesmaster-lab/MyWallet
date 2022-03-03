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
      <div className="container">
     <div className="row">
     <div className="col"><br/><h1>YOUR STATS :</h1></div>
     <div className="col"><TOTALinp/></div>
     <div className="col"><TOTALSAV1/></div>
     <div className="col"><TOTALSAV2/></div>
     </div>
  </div>
     <FundsList/>
   </React.Fragment>
  );
}

export default App;
