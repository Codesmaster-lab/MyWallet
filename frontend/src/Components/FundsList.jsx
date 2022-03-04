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
                <td>{fundelement.id} </td><td>  {fundelement.name}</td> <td>  {fundelement.total_inp} </td> <td> {fundelement.savings1} </td><td>  {fundelement.savings2}  </td> <td> {fundelement.doe}</td>   
                  </tr>)
        }
      
      </tbody>
      </table>
</div>

      <div className="card" style={{width: '90%'}}>
        <h5 className="card-header">Featured</h5>
        <br/>
        <center>
        
        {
          this.state.funds.map (fundelement =>
              <>
                <div className="card" style={{width: '90%'}}>
        <div className="card-body">
             {fundelement.name} {fundelement.total_inp} {fundelement.savings1}   {fundelement.savings2}  {fundelement.doe} 
        
        </div>
       </div>
       <br/>
       </>
       )
        }
      
      </center>
      <br/>
      </div>


      </>
    )
  }
}
