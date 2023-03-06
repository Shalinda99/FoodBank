import React from 'react';
import './Login.css';
// import image301 from '../images/image301.jpg';

const Login = () => {
    return ( 
        <React.Fragment>
           
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        {/* <ion-icon name="mail-outline"></ion-icon> */}
                        <input type="Username" required />
                        <label for="">Username</label>
                    </div>
                    <div class="inputbox">
                        {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox" />Remember Me  <a href="#">Forget Password</a></label>
                      
                    </div>
                    <button>Log in</button>
                    <div class="register">
                        <p>Don't have a account? <a href="#">SignUp</a></p>
                    </div>
                </form>
            </div>
        </div>
 
        </React.Fragment>
     );
}
 
export default Login;