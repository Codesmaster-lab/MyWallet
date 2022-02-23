import React from 'react';
import axios from 'axios';

export default class TOTALinp extends React.Component {


    
  componentDidMount() {
    axios.get(`http://localhost:8080/api/gettotalinp`)
      .then(res => {
       console.log(res.data)
      })
  }

  render() {
    return (
     <h2>"LAUDA"</h2>
    )
  }
}
