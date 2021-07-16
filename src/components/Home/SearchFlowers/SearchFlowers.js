import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FlowersCollectionShow from '../FlowersCollectionShow/FlowersCollectionShow';
import Navbar from '../../Shared/Navbar/Navbar'
import './SearchFlowers.css'
import Footer from '../../Shared/Footer/Footer';

const SearchFlowers = () => {
    const name = useParams();
    const [flowersData, setFlowersData] = useState([]);
    const [error,setError]=useState(null);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=20263967-046b644b9589617318ad2e8b9&q=${name}+flowers&image_type=photo`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Search data is not available')
                }
                return res.json();
            })
            .then(data => {
                setFlowersData(data.hits);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
    }, [name])

    return (
        <>
                <Navbar state={false}></Navbar>
                <div className="container mb-5">
            <h4 className="text-center h4TitleFont">Search Results</h4>
            { error && <h6 className="text-center ">{error}</h6>}
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    flowersData?.map(flower =>
                        <FlowersCollectionShow flower={flower} id={flower.id} state={false} ></FlowersCollectionShow>
                    )
                }
            </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SearchFlowers;