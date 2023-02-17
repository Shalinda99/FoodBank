import React from 'react';
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.css';


const Login = () => {
    return ( 
        <div className='wrapper d-flex align-items-center justify-content-center w-100'>
            <div className='login'>

            
                
                <h2 className='mb-3'>Login</h2>
                {/* <div className='d-flex justify-content-center align-center mt-5'> */}
                <form className='needs-validation '>
                <div className='form-group was-validated mb-2'>
                    <label htmlFor='username' className='form-label'>User name</label>
                    <input type="text" className='form-control ' required></input>
                    <div className='invalid-feedback'>
                        Please enter your username
                    </div>
                </div>
                <div className='form-group was-validated mb-2'>
                    <label htmlFor='password'className='form-label'>Password</label>
                    <input type="password" className='form-control' required></input>
                    <div className='invalid-feedback'>
                        Please enter your password
                    </div>
                </div>
                <div className='form-group form-check mb-2' >
                    <input type="checkbox" className='form-check-input'></input>
                    <label htmlFor='checkbox'className='form-check-label'>Remember me</label>
                </div>
                <div class="col-md-12 text-center">
                <button type='submit' className='btn btn-success block mt-2'>Login</button>
                </div>
                  
             

                </form>
                {/* </div> */}
                
            </div>
        </div>
     );
}
 
export default Login;