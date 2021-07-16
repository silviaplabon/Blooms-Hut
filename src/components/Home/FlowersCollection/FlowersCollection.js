import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import FlowersCollectionShow from '../FlowersCollectionShow/FlowersCollectionShow';
import './FlowersCollection.css'

const FlowersCollection = () => {
    const history=useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [flowersData, setFlowersData] = useState([]);
    const [numberOfData, setNumberOfData] = useState(10);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=20263967-046b644b9589617318ad2e8b9&q=flowers&image_type=photo&per_page=${numberOfData}`)
            .then(res => res.json())
            .then(data => {
                setFlowersData(data.hits);
            })

    }, [numberOfData])

    const sliceImageOperation = () => {
        if (numberOfData < flowersData.length) {
            const data = numberOfData + 10;
            setNumberOfData(data);
        }
        else {
            setVisible(false);
            setNumberOfData(flowersData);
        }
    }



    return (
        <div className="container">
            <h2 className="text-center h2TitleFont">
                Our Awesome Flowers
            </h2>
            <h4 className="text-center h4TitleFont">Shop the collection</h4>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    flowersData?.map(flower =>
                        <FlowersCollectionShow flower={flower} id={flower.id} state={true}></FlowersCollectionShow>
                    )
                }
            </div>
            {
                visible == true ?
                    <div className="d-flex justify-content-center">
                        {
                            loggedInUser.email ? 
                            <button className="my-2 btn btn-outline-primary text-white" style={{ backgroundColor: "#1B1B1B" }} onClick={() => sliceImageOperation()}>Load More</button> :                    
                            <button className="my-2 btn btn-outline-primary text-white" style={{ backgroundColor: "#1B1B1B" }} onClick={()=> history.push('/auth/login')}>Load More</button>
                        }
                    </div>

                    : <h5 className="text-center">END of Result</h5>
            }






        </div>
    );
};

export default FlowersCollection;