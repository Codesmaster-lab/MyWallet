import React, { useState } from 'react';
import axios from 'axios';

export default class TOTALinp extends React.Component {

  state={
    totinp :''
  }
  
  
  componentDidMount() {
    axios.get(`http://localhost:8080/api/gettotalinp`)
      .then(res => {
        const totinp = res.data;
        console.log(totinp);
        this.setState({ totinp });
      })
  }

 render()
 {
   const das=this.props;
  return(
    <>
    <h2>{this.state.totinp}</h2>
    </>
    )
 }
}
