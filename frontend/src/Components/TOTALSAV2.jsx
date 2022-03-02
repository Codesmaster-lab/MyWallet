import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TOTALSAV2 extends Component {
    
    state={
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
              <h2>{this.state.totsav2}</h2>
            </div>
        );
    }
}


export default TOTALSAV2;