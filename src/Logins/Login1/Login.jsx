    import React, { useState } from 'react'
    import './Login.css'
    import { FaEye,FaRegEyeSlash} from 'react-icons/fa';

    function LoginOne(){
          const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
            const [showPassword, setShowPassword] = useState(false);

            const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return(
        <div className="Login-container">
           <div className="form-container">
                <form className="" action="">
                    <h1>Login</h1>
                <label>Email</label>
                <input type="email" name="Email" id="email"/>
                <br/><br/>
                <label>Password</label>
                <input type={showPassword ? "text" : "password"}
                 onChange={handleChange}
                    name="Password" id="password"/>
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="toggle-password"
                >
                    {showPassword ? <FaRegEyeSlash/> : <FaEye />}
                </button>
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
