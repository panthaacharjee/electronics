import React from 'react'
import First from '../../Img/7a0d5aeb-af10-4c2a-8ef7-b7e344482552.jpg'
import Second from '../../Img/7daac26d-6b6f-4f24-a2cf-99c8d715bdc6.jpg'
import Third from '../../Img/41e87b59-52bd-4cc7-9e24-41e33b0a8163.jpg'


const Carsoul = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-12 mt-5">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={First} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={Second} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={Third} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carsoul
