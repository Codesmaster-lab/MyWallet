import React from 'react';
import axios from 'axios';

export default class FundsList extends React.Component {
  state = {
    funds: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/getfunds`)
      .then(res => {
        const funds = res.data;
        this.setState({ funds });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.funds
            .map(fundelement =>
              <li key={fundelement.id}>{fundelement.id}   {fundelement.name}   {fundelement.total_inp}   {fundelement.savings1}   {fundelement.savings2}    {fundelement.doe}</li>
            )
        }
      </ul>
    )
  }
}
