import React from 'react'
import{Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    return (
        <>
            <form className="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-7 col-8 register-form">
                        <div className="row">
                    <div className="col-md-12">
                            <div className="form-group">
                                <label >Full Name : </label>
                                <input 
                                    type="name" 
                                    className="form-control"  
                                    placeholder="Enter your name" 
                                    name="fullname"
                                    {
                                        ...register("fullname", 
                                        {
                                            required: {value:true, message:"This field is required"} 
                                        }
                                        )
                                    }
                                />
                                {errors.fullname && <span className="text-danger">{errors.fullname.message}</span>}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label >Email : </label>
                                <input 
                                    type="email" 
                                    className="form-control"  
                                    placeholder="Enter your email"
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
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label >Password : </label>
                                <input 
                                    type="password" 
                                    className="form-control"  
                                    placeholder="Enter your password"
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
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary form-group" onClick={handleSubmit(onSubmit)}>Register</button>
                            <p>Already have a account? <Link to="/signin">Login</Link></p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>    
            </form>   
        </>
    )
}

export default Register
