import React from 'react';
import WonderfulArrangementShow from '../WonderfulArrangementShow/WonderfulArrangementShow';

const SubscribeSection = () => {
    const imageData = [
        {
            name:'SUbscription Service',
            image: 'https://i.ibb.co/VQd5GLr/footerbefore1.jpg',
            description:'Treat your workplace or home to a touch of regular beauty with our personalized subscription service.' },
        { 
            name:'Seasonal Flowers ' ,
            image: 'https://i.ibb.co/nQYfzS9/foorerbefore2.jpg',
            description:'The power of flowers helps you perfectly express how important your significant other is in your life.'
        },
        { 
            name:'Make Someone Smile',
            image: 'https://i.ibb.co/gTY3vJd/footerbefore3.jpg',
            description:'Camelia Floral Studio has all the best flowers to make someone smile and laugh or cheer someone up!'
        },
        // { image: 'https://i.ibb.co/SKrNSbj/footerbefore4.jpg' },

    ]
    return (
        <div className="container mt-5 ">
            <h4 className="h4TitleFont text-center mt-5">Wonderful Gift</h4>
            <h2 className="text-center h2TitleFont ">Our Wonderful Arrangements</h2>
            <div className="row row-cols-2 row-cols-md-3 mt-5">
                {
                    imageData.map(data => <WonderfulArrangementShow data={data}></WonderfulArrangementShow>)
                }
            </div>
        </div>
    );
};

export default SubscribeSection;
