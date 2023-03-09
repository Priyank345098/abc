import React from 'react';
import { useState } from "react";

import "../../styles/login.css"
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
import Helmet from '../Helmet/Helmet'
import CommonSection from './CommonSection'

export default function Login() {

  
  // logic for nav
  const navigate=useNavigate()


  const login=()=>{
    alert("hello")
    navigate("/customer")

  }
  return (
    // <Helmet title="Login">
    // <CommonSection title="Login" />
    <div class="wrapper">
        <form class="form-signin" >

           <h2 class="form-signin-heading text-center">Login</h2>
           <div class="btn-group mb-3 btn-group-lg h-100 d-flex align-items-center justify-content-center" >
                    <button class="btn btn-primary active">Customer</button>

                    <button class="btn btn-primary "><Link className='nav-link' to="/adminlogin" >Admin</Link></button>
                  </div>
           
           
           <input type="text" class="form-control" name="username" placeholder="Enter Username" required="" autofocus=""  />
                   
           <br/>
           <input type="password" class="form-control" name="password" placeholder="Enter Password" required="" />      
           <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={login}>Login</button>   
           <p class="text-center text-muted mt-2 mb-0">Don't have an account yet?   <Link to="/user"><u>Sign Up here</u></Link></p>
        </form>
     </div>
  
        
      // </Helmet>
    
  );
}


