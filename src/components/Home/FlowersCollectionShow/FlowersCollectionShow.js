import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import './FlowersCollectionShow.css'

const FlowersCollectionShow = (props) => {
    const { previewURL, price, tags, views, likes, downloads, comments } = props.flower;
    const state=props.state;
    console.log(props.flower)
    const newTags = tags?.replace(/,/g, ' ');

    return (
        <div className="col mt-3">
            <div className="card " style={{borderRadius:'0.90rem' }}>
                <div className="h-75 w-100">
                    <img src={previewURL} className="imageSearchResult h-100 w-100 rounded" alt="..." />
                </div>
                <div className="h-25">
                    <div className="d-flex justify-content-center align-items-center p-2">
                        <p className="text-center fw-bold">{newTags}</p>
                    </div>
                    {
                        state == false && 
                        <div className="d-flex justify-content-between align-items-center mx-2">
                            <h6><FontAwesomeIcon icon={faHeart} className="HeartIcon me-1"></FontAwesomeIcon >{likes}</h6>
                            <h6><FontAwesomeIcon icon={faDownload} className="downloadIcon me-1"></FontAwesomeIcon>{downloads}</h6>
                            <h6><FontAwesomeIcon icon={faComment} className="commentsIcon me-1"></FontAwesomeIcon>{comments}</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FlowersCollectionShow;