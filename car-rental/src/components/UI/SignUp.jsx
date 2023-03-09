import React from 'react'
import "../../styles/signup.css"
import { Link } from 'react-router-dom'
import CommonSection from './CommonSection'
import Helmet from '../Helmet/Helmet'

export default function SignUp() {
  
  return (
    // <Helmet title="Sign UP">
    // <CommonSection title="Sign UP" />
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
                      <input type="text" id="form3Example1cg" name="username" class="form-control form-control-lg" placeholder="Enter name" />

                    </div>

                    <div className="form-outline mb-2">
                      <input type="email" id="form3Example3cg" name="email" class="form-control form-control-lg" placeholder="Enter email" />

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg" name="mblNo" class="form-control form-control-lg" placeholder="Enter mobile number" />

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg"  name="licNo" class="form-control form-control-lg" placeholder="Licence number" />

                    </div>
                    <div className="form-outline mb-2">
                      <input type="mbn" id="form3Example3cg" name="address" class="form-control form-control-lg" placeholder="Address" />

                    </div>
                    

                    

                    <div className="form-outline mb-2">
                      <input type="password" id="form3Example4cg"  name="password" class="form-control form-control-lg" placeholder="Password" />

                    </div>
{/* 
                    <div className="form-outline mb-2">
                      <input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder="Confirm password" />

                    </div> */}



                    <div className="d-flex justify-content-center">
                      <button type="button"
                        className="btn btn-lg btn-primary btn-block">Register</button>
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
    // </Helmet>
  )
}
