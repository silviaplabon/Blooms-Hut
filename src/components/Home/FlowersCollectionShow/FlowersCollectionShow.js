import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import './FlowersCollectionShow.css'
import { AnimationWrapper } from 'react-hover-animation'



const FlowersCollectionShow = (props) => {
    const { previewURL, price, tags, views, likes, downloads, comments } = props.flower;
    const state = props.state;
    let newTags = tags?.replace(/,/g, ' ');
    newTags=newTags.charAt(0).toUpperCase() + newTags.slice(1)

    return (
        <div className="col mt-3">
            <AnimationWrapper config={{
                opacity: {
                    initial: 1,
                    onHover: 1
                },
            }}>
                <div className="card  flowersShow" style={{ borderRadius: '0.90rem' }}>
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
            </AnimationWrapper>
        </div>
    );
};

export default FlowersCollectionShow;