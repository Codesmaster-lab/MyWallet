import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TOTALSAV2 extends Component {

  state = {
    totsav2: ''
  }


  componentDidMount() {
    axios.get(`http://localhost:8080/api/gettotalsavings2`)
      .then(res => {
        const totsav2 = res.data;
        console.log(totsav2);
        this.setState({ totsav2 });
      })
  }

  render() {
    return (
      <div>

       
         
      <br/>
        <div className="card" style={{width: '15rem'}}>
        <div className="card-header">
          <b>TOTAL SAVINGS_2 FUND </b> 
        </div>
        <div className="card-body">
          <h5 className="card-title">Amounts to :</h5> 
          <h3 className="card-text"><b>Rs.{this.state.totsav2}</b></h3>
        </div>
      </div>

      </div>
    );
  }
}


export default TOTALSAV2;