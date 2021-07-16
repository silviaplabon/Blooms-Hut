import React, { useContext, useEffect, useState } from 'react';
import './AddMessage.css'



const AddMessage = (props) => {

    return (

        <div className="">
            <form  className=" mb-5  " >
                <div className="row d-flex" >
                    <div className="col-md-12 mb-3">
                        <h5 className="text-center mt-5">Contact US</h5>
                        <input name="email" id="servicename" className="form-control " style={{ backgroundColor: '#ffc1a9', color: 'white' }} placeholder="Your email"  />
                        <textarea name="description" className="form-control text-white mt-1" style={{ backgroundColor: '#ffc1a9' }} placeholder="description" />
                        <div className="d-flex justify-content-end align-items-end">
                            <input type="submit" className="mt-2 btn sendButton" value="Send" />
                        </div>
                    </div>
                </div>
            </form>
            </div>
    );
};

export default AddMessage;