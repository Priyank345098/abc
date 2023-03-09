import React, { Component } from 'react'
import "../../styles/signup.css"
import { Link } from 'react-router-dom'
import RegisterServices from '../../services/RegisterServices'
export default class CreateRegisterUser extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // step 2
            //id: this.props.match.params.id,
            username: '',
            email: '',
            address: '',
            password: '',
            mblNo: '',
            licNo: ''
        }
        this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changemblNoHandler = this.changemblNoHandler.bind(this);
        this.changelicNoHandler = this.changelicNoHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);

        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    changeuserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changemblNoHandler= (event) => {
        this.setState({mblNo: event.target.value});
    }
    changelicNoHandler= (event) => {
        this.setState({licNo: event.target.value});
    }
    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let newuser = {username: this.state.username, email: this.state.email,
                     mblNo: this.state.mblNo, licNo: this.state.licNo, 
                     address: this.state.address,password: this.state.password};
        console.log('newuser => ' + JSON.stringify(newuser));

        RegisterServices.createRegister(newuser).then(res =>{
            this.props.history.push('/register');
        });
    }
    cancel(){
        this.props.history.push('/register');
    }

  render() {
    return (
     <section className="vh-10 bg-image">
      <div className="mask d-flex align-items-center h-50 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="card-body p-3">
                  <h4 class="text-uppercase text-center mb-3">Sign Up</h4>
                

                  <form className='signup_form'>

                    <div className="form-outline mb-2">
                      <input type="text" id="form3Example1cg" name="username" class="form-control form-control-lg" 
                      placeholder="Enter name" value={this.state.username} onChange={this.changeuserNameHandler}/>

                    </div>

                    <div className="form-outline mb-2">
                      <input type="email" id="form3Example3cg" name="email" class="form-control form-control-lg" 
                      placeholder="Enter email" value={this.state.email} onChange={this.changeEmailHandler}/>

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg" name="mblNo" class="form-control form-control-lg" 
                      placeholder="Enter mobile number" value={this.state.mblNo} onChange={this.changemblNoHandler}/>

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg"  name="licNo" class="form-control form-control-lg" 
                      placeholder="Licence number" value={this.state.licNo} onChange={this.changelicNoHandler}/>

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg" name="address" class="form-control form-control-lg" 
                      placeholder="Address" value={this.state.address} onChange={this.changeaddressHandler}/>

                    </div>
                    
                    <div className="form-outline mb-2">
                      <input type="password" id="form3Example4cg"  name="password" class="form-control form-control-lg"
                       placeholder="Password" value={this.state.password} onChange={this.changepasswordHandler}/>

                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button"
                        className="btn btn-lg btn-primary btn-block" onClick={this.saveOrUpdateUser} >Register</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                    </div>

                    <p className="text-center text-muted mt-2 mb-0">Have already an account? <Link to="/login"><u>Login here</u></Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
