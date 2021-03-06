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
      <>
      <br/>
      <div className="table-responsive">
      <table className="table table-dark table-striped ">
      <thead>
      <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">FUND INPUT</th>
      <th scope="col">SAVINGS 1</th>
      <th scope="col">SAVINGS 2</th>
      <th scope="col">DOE</th>
    </tr>
      </thead>
      <tbody>
      
        {
          this.state.funds.map (fundelement =>
              <tr key={fundelement.id}>
                <td>{fundelement.id} </td><td>  {fundelement.name}</td> <td>  Rs. {fundelement.total_inp} </td> <td> Rs. {fundelement.savings1} </td><td>  Rs. {fundelement.savings2}  </td> <td> {fundelement.doe}</td>   
                  </tr>)
        }
      
      </tbody>
      </table>
</div>

      </>
    )
  }
}
