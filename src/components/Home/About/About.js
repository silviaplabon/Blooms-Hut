import React from 'react';
import './About.css'

const About = () => {
    return (
            <div className="pt-5 row ps-2 m-0" >
                <div className="col-md-6 col-lg-6   aboutContent pe-5" style={{paddingLeft:'130px'}}>
                    <h3 className="h3TitleFont" style={{marginTop:'100px'}}>Wonderful Gift</h3>
                    <h4  className="mt-1 h4TitleFont">A Perfect Spot</h4>
                    <h6 className=" mt-2 h6TitleFont" style={{textAlign:'justify'}}>As a full service florist, our team can handle all your floral needs. We offer a multitude of services including retail,
                        residential, full scale wedding and event planning.
                      </h6>
                      <button className="mt-2 btn btn-outline-primary ">READ MORE</button>
                </div>
                <div className="col-md-6 col-lg-6 me-0">
                    <img src="https://i.ibb.co/0jVPrBq/about1.jpg" className="py-5 img-fluid"></img>
                </div>
            </div>
    );
};

export default About;