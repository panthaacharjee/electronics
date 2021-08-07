import React from 'react'
import{Link} from 'react-router-dom'
import ProductData from './ProductData'

const Products = () => {
    return (

        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Favorite Products</h2><hr/>
                </div>
            </div>
        </div>
            <div className="container  mb-5">
                <div className="row">
                    {ProductData.map((val, ind)=>{
                        return(
                            <>
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-2 d-flex justify-content-center" key={ind} >
                                <Link className="card"  to={val.path}>
                                    <img src={val.img} class="card-img-top card-img-products" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">{val.model}</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className="card-price">{val.price}</span>
                                    </div>
                                </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
