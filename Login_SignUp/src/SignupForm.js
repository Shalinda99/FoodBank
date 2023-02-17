import React from 'react';
import './SignupForm.css'
import 'bootstrap/dist/css/bootstrap.css';


const SignUp = () => {
    return ( 
        <div className='wrapper d-flex align-items-center justify-content-center w-100'>
            
            <div className='Signup'>
                <h2 className='mb-3'>Create Account</h2>
                
                <form className='needs-validation '>
                <span className='wrap2 d-flex justify-content-between'>
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='firstname' className='form-label'>First Name</label> */}
                    <input type="text" className='form-control'  placeholder='First Name' required></input>
                    <div className='invalid-feedback'>
                        Please enter your First name
                    </div>
                    
                </div>

                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='firstname' className='form-label'>First Name</label> */}
                    <input type="text" className='form-control'  placeholder='Last Name' required></input>
                    <div className='invalid-feedback'>
                        Please enter your First name
                    </div>
                    
                </div>
                </span>
                
               
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='email' className='form-label'>Email Address</label> */}
                    <input type="text" className='form-control' required placeholder='Email Address'></input>
                    <div className='invalid-feedback'>
                        Please enter your Email Address
                    </div>
                    
                </div>
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='contactNumber' className='form-label'>Contact Number</label> */}
                    <input type="text" className='form-control' required placeholder='Contact Number'></input>
                    <div className='invalid-feedback'>
                        Please enter your Contact Number
                    </div>
                    
                </div>
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='username' className='form-label'>User name</label> */}
                    <input type="text" className='form-control' required placeholder='User name'></input>
                    <div className='invalid-feedback'>
                        Please enter your username
                    </div>
                    
                </div>
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='password'className='form-label'>Password</label> */}
                    <input type="password" className='form-control' required placeholder='Password'></input>
                    <div className='invalid-feedback'>
                        Please enter your password
                    </div>
                </div>
                <div className='form-group was-validated mb-2'>
                    {/* <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label> */}
                    <input type="text" className='form-control' required placeholder='Confirm Password'></input>
                    <div className='invalid-feedback'>
                        Reenter your password 
                    </div>
                    
                </div>

                <div className='form-group form-check mb-2' >
                    <input type="checkbox" className='form-check-input'></input>
                    <label htmlFor='checkbox'className='form-check-label'><i>I agree to the terms of use & Privacy policy.</i></label>
                </div>
                
                <div class="col-md-12 text-center">
                <button type='submit' className='btn btn-success block mt-2 mb-2'>SignUp</button>
                </div>

                <span>
                    Already have an account?
                    <a href="https://www.figma.com/file/bGk47CDvZNEbtcXcDiqRon/Amal-Individual-UI?node-id=34%3A46&t=HnYRXb6PJ3c7AzrV-0">Login here</a>
                </span>
                  
             

                </form>
                
            </div>
        </div>
     );
}
 
export default SignUp;