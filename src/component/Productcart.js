import React, { Component } from 'react';
import json from '../products.json';
import TotalBill from './TotalBill'

class Productcart extends Component {
    constructor(){
        super();
        this.state=({
            mycart:0,
            lengthquan:null
        })
    }
    addCard=(ele)=>{
        let check=0;

        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            arr.map(obj =>{
                if(obj.id==ele.id){
                    obj.quantity ++;                
                    localStorage.setItem('mycart',JSON.stringify(arr));
                    alert('quantity incresed');
                    check=1
                }
            })
            if(!check){
                    arr.push(ele);
                    localStorage.setItem('mycart',JSON.stringify(arr));
                    alert('product added in cart');
            }
        }
        else{
            let arr = [];
            arr.push(ele);
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("product added in cart");
        }
        let arr = JSON.parse(localStorage.getItem('mycart'));
        let sum = this.state.lengthquan + ele.quantity;

        this.setState({
            mycart:JSON.parse(localStorage.getItem('mycart')),
            lengthquan:sum  
        })
    }
    render() {
        return (
            <>
            <div>
            <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart <span className="badge badge-primary badge-pill">{this.state.lengthcart}</span> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#details">Quantity <span className="badge badge-primary badge-pill">{this.state.lengthquan}</span></a>
                    </li>
                    <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary" onClick={()=>{localStorage.removeItem('quantity');localStorage.removeItem('mycart');alert('cart clear');this.setState({lengthcart:0,lengthquan:0})}}>Clear Cart</button> 

                    </li>
                </ul>
                </div>
            
            <div className="row justify-content-around">
                {json.products.map((ele,index) =>
                        <div key={index} className="card col-3 m-3 text-center">
                            <img className="card-img-top" src={`./images/${ele.images}`} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-text">{ele.pname}</h3>
                               Price: <p className="card-text">{ele.price}</p>
                               Quantity <p className="card-text">{ele.quantity}</p>
                                <button type="button" className="btn btn-outline-primary" onClick={()=>this.addCard(ele)}>Add to cart</button> 
                            </div>
                        </div>
                    )
                }
            </div>
            <TotalBill bill={JSON.parse(localStorage.getItem('mycart'))}/>

        </>
        );
    }
}

export default Productcart;
