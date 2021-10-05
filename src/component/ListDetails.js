import React, { Component } from 'react'

export class ListDetails extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Employee id</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.props.persons.map((emp,index)=>
                <tr key={index}>
                  <td>{emp.eid}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.city}</td>
                </tr>
                  )}
              
            
            </tbody>
          </table>
      </div>
    )
  }
}

export default ListDetails
