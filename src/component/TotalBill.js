import React, { Component } from 'react';

class TotalBill extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
              <div className="container" id="details">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localStorage.getItem('mycart')!=undefined?
                        JSON.parse(localStorage.getItem('mycart')).map((ele,index)=>
                                <tr key="index">
                                    <th>{ele.id}</th>
                                    <th>{ele.pname}</th>
                                    <th>{ele.price}</th>
                                    <th>{ele.quantity}</th>
                                    <th>{Number.parseInt(ele.price,10)*Number.parseInt(ele.quantity,10)}</th>
                                </tr>
                            ):<tr><td colSpan="5">Please Add Item to Cart</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        )
      }
}

export default TotalBill;