import React, { useState } from 'react';
import axios from 'axios';

export default class TOTALinp extends React.Component {

  state = {
    totinp: ''
  }


  componentDidMount() {
    axios.get(`http://localhost:8080/api/gettotalinp`)
      .then(res => {
        const totinp = res.data;
        console.log(totinp);
        this.setState({ totinp });
      })
  }

  render() {
    const das = this.props;
    return (
      <>
      <br/>
        <div className="card" style={{width: '15rem'}}>
        <div className="card-header">
          <b>TOTAL FUND INPUT</b> 
        </div>
        <div className="card-body">
          <h5 className="card-title">Amounts to :</h5> 
          <h3 className="card-text"><b>Rs.{this.state.totinp}</b></h3>
        </div>
      </div>

      </>
    )
  }
}
