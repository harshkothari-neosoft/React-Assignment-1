import React, { Component } from 'react'
const regForName = RegExp('[a-zA-Z][a-zA-Z ]*')
const regForEmail = RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
const regForNumber = RegExp('^[6-9][0-9]{9}$')
const regForFax = RegExp('^[0-9]{7}$')
const regForAddress = RegExp('^[#.0-9a-zA-Z,-]+$')
const regForPin = RegExp('^[1-9][0-9]{5}$')
const regForAge = RegExp('^[0-9]')

export class ApplicationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:null, lastname:null, contact:null, alternatecontact:null, fax:null, email:null, fathername:null, 
            mothername:null, address:null, city:null, statess:null, pincode:null, age:null, gender:null,
            companyname:null, companylocation: null,
            errors:{
                firstname:' ',lastname:' ', contact:' ', alternatecontact:' ', fax:' ', email:' ', fathername:' ',
                mothername:' ', address:' ', city:' ', statess:' ', pincode:' ', age:' ', gender:' ',
                companyname:' ', companylocation:' '
            }
        }
    }
    handler=(event)=>{
        const{name,value} = event.target;
        let errors= this.state.errors;

        switch(name){
            case 'firstname':
                errors.firstname= regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
            case 'lastname':
                errors.lastname= regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
            case 'contact':
                errors.contact= regForNumber.test(value)?'':'Invalid Contact Number, Write 10 digit contact number';
                break;
            case 'alternatecontact':
                errors.alternatecontact= regForNumber.test(value)?'':'Invalid Contact Number, Write 10 digit contact number';
                break;
            case 'fax':
                errors.fax= regForFax.test(value)?'':'Invalid Fax Number, Write atleast 7 digit Fax number';
                break;
            case 'email':
                errors.email= regForEmail.test(value)?'':'Invalid Email-Id';
                break;
            case 'fathername':
                errors.fathername= regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
            case 'mothername':
                errors.mothername= regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
            case 'address':
                errors.address= regForAddress.test(value)?'':'Invalid Address, Use Number and Character Only';
                break;
            case 'city':
                errors.city= regForName.test(value)?'':'Invalid City Name, Use Character Only';
                break;
            case 'statess':
                errors.statess= regForName.test(value)?'':'Invalid State Name, Use Character Only';
                break;
            case 'pincode':
                errors.pincode= regForPin.test(value)?'':'Invalid Pincode, Write 6 digit Pincode';
                break;
            case 'age':
                errors.age= regForAge.test(value) && value > 18 ?'':'Invalid age';
                break;
            case 'companyname':
                errors.companyname= regForName.test(value)?'':'Invalid Company Name, Use Character Only';
                break;
            case 'companylocation':
                errors.companylocation= regForName.test(value)?'':'Invalid Company Location, Use Character Only';
                break;
            
            break;
        }
        this.setState({errors,[name]:value}, () =>{
            console.log(errors)
        })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors)){
            alert("Submitted")
        }
        else{
            alert("Invalid form")
        }
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    render() {
        const {errors}= this.state;
        return (
            <div className="container">
                <h2>Application Form</h2>
                <form method="POST" onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label><b>First Name</b></label>
                        <input type="text" name="firstname" placeholder="Enter your first name" className="form-control" onBlur={this.handler}/>
                        {errors.firstname.length>0 && <span style={{color:'red'}}>{errors.firstname}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Last Name</b></label>
                        <input type="text" name="lastname" placeholder="Enter your last name" className="form-control" onBlur={this.handler}/>
                        {errors.lastname.length>0 && <span style={{color:'red'}}>{errors.lastname}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Contact Number</b></label>
                        <input type="text" name="contact" placeholder="Enter your 10 digit contact number" className="form-control" onBlur={this.handler}/>
                        {errors.contact.length>0 && <span style={{color:'red'}}>{errors.contact}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Alternate Contact Number</b></label>
                        <input type="text" name="alternatecontact" placeholder="Enter your alternate contact number" className="form-control" onBlur={this.handler}/>
                        {errors.alternatecontact.length>0 && <span style={{color:'red'}}>{errors.alternatecontact}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Fax Number</b></label>
                        <input type="text" name="fax" placeholder="Enter your fax number" className="form-control" onBlur={this.handler}/>
                        {errors.fax.length>0 && <span style={{color:'red'}}>{errors.fax}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Email-id</b></label>
                        <input type="text" name="email" placeholder="Enter your Email-id" className="form-control" onBlur={this.handler}/>
                        {errors.email.length>0 && <span style={{color:'red'}}>{errors.email}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Fathers Name</b></label>
                        <input type="text" name="fathername" placeholder="Enter your father name" className="form-control" onBlur={this.handler}/>
                        {errors.fathername.length>0 && <span style={{color:'red'}}>{errors.fathername}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Mother Name</b></label>
                        <input type="text" name="mothername" placeholder="Enter your mother name" className="form-control" onBlur={this.handler}/>
                        {errors.mothername.length>0 && <span style={{color:'red'}}>{errors.mothername}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Address</b></label>
                        <input type="text" name="address" placeholder="Enter your address" className="form-control" onBlur={this.handler}/>
                        {errors.address.length>0 && <span style={{color:'red'}}>{errors.address}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>City</b></label>
                        <input type="text" name="city" placeholder="Enter your city" className="form-control" onBlur={this.handler}/>
                        {errors.city.length>0 && <span style={{color:'red'}}>{errors.city}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>State</b></label>
                        <input type="text" name="statess" placeholder="Enter your State name" className="form-control" onBlur={this.handler}/>
                        {errors.statess.length>0 && <span style={{color:'red'}}>{errors.statess}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Pincode</b></label>
                        <input type="text" name="pincode" placeholder="Enter your 6 digit pincode number" className="form-control" onBlur={this.handler}/>
                        {errors.pincode.length>0 && <span style={{color:'red'}}>{errors.pincode}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Age</b></label>
                        <input type="text" name="age" placeholder="Enter your age, if you are less than 18, not applicable to submit form" className="form-control" onBlur={this.handler}/>
                        {errors.age.length>0 && <span style={{color:'red'}}>{errors.age}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Company Name</b></label>
                        <input type="text" name="companyname" placeholder="Enter your company name" className="form-control" onBlur={this.handler}/>
                        {errors.companyname.length>0 && <span style={{color:'red'}}>{errors.companyname}</span> }
                    </div>

                    <div className="form-group">
                        <label><b>Company Location</b></label>
                        <input type="text" name="companylocation" placeholder="Enter your company location" className="form-control" onBlur={this.handler}/>
                        {errors.companylocation.length>0 && <span style={{color:'red'}}>{errors.companylocation}</span> }
                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default ApplicationForm
