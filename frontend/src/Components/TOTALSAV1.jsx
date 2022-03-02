import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TOTALSAV1 extends Component {
    
    state={
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
              <h2>{this.state.totsav1}</h2>
            </div>
        );
    }
}


export default TOTALSAV1;