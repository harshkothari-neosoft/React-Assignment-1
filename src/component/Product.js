import React, { Component } from 'react'
import data from '../products.json';
export class Product extends Component {
    constructor(props){
        super(props);
        this.state={proData:[],l:0, q:0};
       
    }
    componentDidMount(){
        {this.setState({proData:data.products})}
    }
    addCart=(id)=>{
        if(localStorage.getItem('quantity')!=undefined){
            let arr=JSON.parse(localStorage.getItem('quantity'));
            arr.push(id);
            localStorage.setItem('quantity',JSON.stringify(arr));
            alert("product Added to cart")
        }
        
        else{
            let arr=[];
            arr.push(id);
            localStorage.setItem('quantity',JSON.stringify(arr));
            alert("product Added to cart")
        }
        let arr= JSON.parse(localStorage.getItem('quantity'))!=undefined?JSON.parse(localStorage.getItem('quantity')):[];
        let set = new Set(arr);
        let arr2 = [...set];
        localStorage.setItem('mycart',JSON.stringify(arr2));
        this.setState({
            q:arr.length,
            l:set.size
        })
    }
    render() {
        return (
            <>
               
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Cart <span className="badge badge-primary badge-pill">{this.state.l}</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Products <span className="badge badge-primary badge-pill">{this.state.q}</span></a>
                        </li>
                        </ul>
                    </div>
                </nav>

                <div className="row container ml-5 pl-5 mt-4 pt-4">
                {this.state.proData.map((pro,index) =>
                    <div key={index} className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                            <img className="card-img-top" height="200px" width="200px" src={`./images/${pro.images}`}/>
                                <div className="card-text">
                                   <h5 className="card-title">{pro.pname}</h5>
                                    Price : <i>{pro.price}</i><br/>
                                    Quantity : <i>{pro.quantity}</i>
                                </div>
                                <button className="btn btn-primary" onClick={()=>this.addCart(pro.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                        )}
                </div>
            </>
        )
    }
}

export default Product
