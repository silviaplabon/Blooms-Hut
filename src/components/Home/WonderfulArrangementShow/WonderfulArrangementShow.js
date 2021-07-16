import React from 'react';
import './WonderfulArrangementShow.css'

const WonderfulArrangementShow = (props) => {
    const {name,image,description}=props.data;

    return (
        <div className="col">
            <div className="card shadow-lg w-100 text-center rounded" >
                <div className="d-flex justify-content-center align-items-center h-100 contain ">
                    <img src={image} className="card-img-top w-100 h-100 " />
                    <div className="overlay d-flex justify-content-center align-items-center" id="overlays"  >
                        <div className="button d-flex-row align-items-center justify-content-center">
                            <h4 className="text-center text-white"> { name}</h4>
                            <p className="text-center text-white px-2 mt-5">{description}</p>
                            <button className="btn btn-lg mt-2 text-white" style={{ backgroundColor: '#1B1B1B' }}
                            >Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className="">


        //     <div className="contain">
        //         <img src={image} className="w-100 h-100" />
        //         <div className="overlay d-flex justify-content-center align-items-center" id="overlays"  >
        //             <div className="button d-flex-row align-items-center justify-content-center">
        //                 <h4 className="text-center text-white "> why </h4>
        //                 <button className="btn btn-lg mt-2 text-white" style={{ backgroundColor: '#2d524a' }}
        //                 >Detail</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default WonderfulArrangementShow;