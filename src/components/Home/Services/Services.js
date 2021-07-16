import React from 'react';
import './Services.css'
const Services = () => {

    return (
    
            <div className="row row-cols-1 row-cols-md-3 mt-1 mx-1 mb-1">
                <div className="col text-end ">
                    <div className="card freeShopping">
                        <h1 className="">Free Shipping</h1>
                        <p>Get A Free Delivery On Order Of $200</p>
                    </div>
                </div>
                <div className="col text-end ">
                    <div className="card priceGurantee">
                        <h1>Price Gurantee</h1>
                        <p>We Gurantee the best price</p>
                    </div>
                </div>
                <div className="col text-end priceGurantee">
                    <div className="card">
                        <h1>Free Support</h1>
                        <p>We Gurantee the best price</p>
                    </div>
                </div>
            </div>
    );
};

export default Services;