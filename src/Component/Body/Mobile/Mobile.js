import React from 'react'
import {Link} from 'react-router-dom'
import MobileData from './MobileData'

const Mobile = () => {
    return (
        <>
         <div className="container">
            <div className="row mb-5 ">
                {MobileData.map((val, ind)=>{
                    return(
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center laptop">
                            <Link to={val.path} className="ml-3">
                                <div className="card card-laptop" style={{width:"16rem"}}>
                                    <img className="card-img-top card-img" src={val.img} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 className="card-title">{val.name}</h6>
                                        <p className="card-text"> {val.details}</p>
                                        <p>{val.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
         
            </div>    
        </div>   
        </>
    )
}
export default Mobile
