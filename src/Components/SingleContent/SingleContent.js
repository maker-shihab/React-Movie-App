import React from 'react';
import { img_200 } from '../../Config/Config';
import './SingleContent.css';
const SingleContent = ({ id, title, poster, date, media_type, vote_average }) => {
    return (
        <div className='singleItem' id={id}>
            <span className={vote_average >= 7 ? 'vote vote__high' : 'vote vote__low'}>
                {vote_average.toFixed(1)}
            </span>
            <div className='thumb'>
                <img src={`${img_200}${poster}`} alt={title} />
            </div>
            <div className='text'>
                <h3>{title}</h3>
                <div className='date-item'>
                    <p>
                        <span className='head_title'>Type</span>
                        <span>
                            {media_type === "tv" ? "TV Series" : "Movie"}
                        </span>
                    </p>
                    <p>
                        <span className='head_title'>Date</span>
                        <span>{date}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleContent;