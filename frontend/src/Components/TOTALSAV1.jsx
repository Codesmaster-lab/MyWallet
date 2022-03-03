import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TOTALSAV1 extends Component {

  state = {
    totsav1: ''
  }


  componentDidMount() {
    axios.get(`http://localhost:8080/api/gettotalsavings1`)
      .then(res => {
        const totsav1 = res.data;
        console.log(totsav1);
        this.setState({ totsav1 });
      })
  }

  render() {
    return (
      <div>


         
      <br/>
        <div className="card" style={{width: '15rem'}}>
        <div className="card-header">
          <b>TOTAL SAVINGS_1 FUND</b> 
        </div>
        <div className="card-body">
          <h5 className="card-title">Amounts to :</h5> 
          <h3 className="card-text"><b>Rs.{this.state.totsav1}</b></h3>
        </div>
      </div>

      </div>
    );
  }
}


export default TOTALSAV1;