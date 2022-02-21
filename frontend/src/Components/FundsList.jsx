import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class FundsList extends React.Components {
        state = {
                funds: []
        }

        componentDidMount() {
                axios.get('http://localhost:8080/api/getfunds').then(resp => {
                        const funds = resp.data;
                        this.setState({ funds })
                })
        }
        render() {
                return (
                        <div>
                                <ul>
              {
          this.state.funds
            .map(fundelement =>
              <li key={fundelement.id}>{fundelement.name}</li>
            )
        }
      </ul>
                        </div>
                );
        }
}

