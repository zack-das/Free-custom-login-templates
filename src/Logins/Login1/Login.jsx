import React from 'react'
import './Login.css'

    function LoginOne(){
    return(
        <div className="Login-container">
           <div className="form-container">
                <form className="" action="">
                    <h1>Login</h1>
                    <br/><br/>
                <label>Email</label>
                <input type="email" name="Email" id="email"/>
                <br/><br/>
                <label>Password</label>
                <input type="Password" name="Password" id="password"/>
                <div className="altcreateAcc">
                    <button>Login</button>
                    <h2>OR</h2>
                    <p>Create an account <a href="">here!</a></p>
                </div>


            </form>
           </div>
        </div>
    )
 }

    export default LoginOne
