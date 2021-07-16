import React from 'react';

const MessageSection = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5 h2TitleFont">
                SUBSCRIBE TO OUR WEEKLY NEWSLETTER
            </h2>
            <div className="mb-5 m-auto d-flex justify-content-center align-items-center">
                <input type="text" placeholder="Your Email Address" className=" w-50 form-control me-1" />
                <button className="btn btn-outline-primary text-white" style={{ width: '90px', backgroundColor: '#1B1B1B' }}>Send</button>
            </div>
        </div>
    );
};

export default MessageSection;