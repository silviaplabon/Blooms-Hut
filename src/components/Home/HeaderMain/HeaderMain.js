import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory();
    const [searchData, setSearchData] = useState(null);
    const handleChange = event => {
        const name = event.target.value;
        setSearchData(name);
    }
    const handleSearchOption = name => {
        history.push(`/${name}`)
    }
    return (
        <div className="headerMainContainer">
            <div className="mt-5 d-flex justify-content-center align-items-center" >
                <form class="d-flex px-2" style={{ marginTop: '60px' }}>
                    <input class="form-control me-2" type="search" placeholder="Yellow" onChange={handleChange} aria-label="Search" />
                    <button class="btn searchOption searchButton text-white" type="submit" onClick={() => handleSearchOption(searchData)}>Search</button>
                </form>
            </div>
            <h2 className=" pt-5 h2TitleFont  text-center text-white" >Let's make Beautiful flowers part of your life</h2>

            <div className="d-flex-column justify-content-center align-items-center text-center text-white">
                <h6 classsName="h6TitleFont  text-white h6HeaderMain mt-2 mx-1 ">We offer traditional and contemporary floral design styles
                    that are appropriate for birthdays, anniversaries, get well,
                    new baby, sympathy, holidays or just because.</h6>
                <button className="btn text-white text-center shopNowButton" >Shop Now</button>
            </div>
        </div>
    );
};

export default HeaderMain;