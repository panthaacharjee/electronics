import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onsubmit=(data)=>{
        console.log(data);
    }
    return (
     
            <div className="container">
                <div className="row form">
                    <div className="col-lg-5 col-md-7 col-sm-8 col-8 login-form">  
                        <div class="form-group">
                            <label >Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                name ="email"
                                {
                                 ...register("email", 
                                 { 
                                     required: {value:true, message:"This field is required"},
                                     pattern:{value :/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message:"Email is not valid"} 
                                 }
                                 )
                                }
                             />
                             {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                class="form-control"
                                name="password"
                                {
                                    ...register("password", 
                                    { 
                                        required: {value:true, message:"This field is required"},
                                        minLength :{value:8, message:"Minimum value is 8"}, 
                                        maxLength :{value:30, message:"Maximum value is 30"} 
                                    }
                                    )
                                }
                            />
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={handleSubmit(onsubmit)}>Log In</button><br/><br/>
                        <span>Create your new account? </span><Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
    )
}

export default Login
