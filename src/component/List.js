import React, { Component } from 'react'
import ListDetails from './ListDetails';

export class List extends Component {
    constructor(){
        super();
        this.state={
            persons:[
                { eid: 101, ename: "Harsh", salary: 70000, city: "Indore" },
                { eid: 102, ename: "Akash", salary: 40000, city: "Noida" },
                { eid: 103, ename: "Deepika", salary: 35000, city: "Banglore" },
                { eid: 104, ename: "Sairaj", salary: 45000, city: "Banglore" },
                { eid: 105, ename: "Mayuri", salary: 25000, city: "Noida" },
                { eid: 106, ename: "Gaurav", salary: 42000, city: "Indore" },
                { eid: 107, ename: "Arpan", salary: 43000, city: "Pune" },
                { eid: 108, ename: "Naveen", salary: 42000, city: "Kolkata" },
                { eid: 109, ename: "Komal", salary: 44500, city: "Mumbai" },
                { eid: 110, ename: "Saloni", salary: 28500, city: "Chennai" },
                { eid: 111, ename: "Pooja", salary: 18000, city: "Pune" },
                { eid: 112, ename: "Jayesh", salary: 50000, city: "Indore" },
                { eid: 113, ename: "Kajal", salary: 48500, city: "Ahmedabad" },
                { eid: 114, ename: "Priyal", salary: 55000, city: "Surat" },
                { eid: 115, ename: "Tushar", salary: 44000, city: "Nasik" },
                { eid: 116, ename: "Nayan", salary: 48000, city: "Indore" },
                { eid: 117, ename: "Sonika", salary: 37000, city: "Mumbai" },
                { eid: 118, ename: "Siddharth", salary: 65000, city: "Delhi" },
                { eid: 119, ename: "Aditi", salary: 46500, city: "Delhi" },
                { eid: 120, ename: "Aashay", salary: 68000, city: "Indore" }
              ]
        }
    }
    render() {
        return (
            <div>
                <ListDetails persons={this.state.persons}/>
            </div>
        )
    }
}

export default List
